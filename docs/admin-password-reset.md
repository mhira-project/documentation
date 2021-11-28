# Admin Password Reset

If the `superadmin` account password is lost or blocked, you can connect to the postgres database via commandline to reset the password.

Run
```bash
# Connect to postgres using psql CLI tool
docker-compose exec postgres psql '-Udefault'

```

This will open the PSQL prompt. In the PSQL prompt, run the following command:

```psql
# connect to default database
\c default

#Update password to 'Password@1'
update user set password = '$argon2id$v=19$m=16,t=2,p=1$Umd4VFBYZW1NdXdSbThCeA$IO/O4hXWPy3Y9jFPXLMjpg' where code = 'superadmin'

```
