# Admin Password Reset

If the `superadmin` account password is lost or blocked, you can connect to the postgres database via commandline to reset the password.

First, please navigate to the folder that you cloned from github.

Run
```bash
# Connect to postgres using psql CLI tool
docker-compose exec postgres psql '-Udefault'

```

This will open the PSQL prompt. In the PSQL prompt, run the following command:

```psql
# connect to default database
\c default

#Update password to default value of 'superadmin'
UPDATE "public"."user" 
    set "active" = true, 
    "passwordExpiresAt" = now(), 
    "password" = '$argon2id$v=19$m=16,t=2,p=1$eUxBQXd3bTVhYTU5c2pKUQ$s4pcrRM4RTbfEBV//JpcIw' 
WHERE "isSuperUser" = true;
```


After which login to MHIRA portal with username: `superadmin` and password `superadmin` and change your password to something more secure.
