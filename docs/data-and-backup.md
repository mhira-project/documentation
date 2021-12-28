# Data and Backup

## Data Storage Location

The location where mhira-docker installation will store its data is controlled by environment variable `DATA_SAVE_PATH` in the .env file.

```dotenv
# Default location under current user home directory
DATA_SAVE_PATH=~/.mhira-docker/data
```

This is where all stateful containers (containers which persist data) will store their configuration and data.

In a typical installation, the folder contents will be as listed below.

![Data-Directory](/resources/images/data-directory.png "Data Directory")

***Important note on MHIRA running user context:***
> As the data directory is a relative path to the current user's home directory, the user under which `MHIRA` is running is of importance.
>
> For example: if `MHIRA` docker-compose is run as root user, the data save path will be under the root user's home directory, i.e: `/root/.mhira-docker/data`.
>
> Switching running mhira using one user to another can result in apparent data loss, as the new user context will create a new data directory under their home directory, which will not include data from the old data directory.
>
> To avoid this, MHIRA system admin can replace the `DATA_SAVE_PATH` with an absolute path pointing to a directory they wish to persist data.

## Backup data

MHIRA data backup uses standard file formats: TAR for creating archives and GZIP for compression. These formats are natively supported on linux, macOS and other operating systems. This makes it possible to easily extract files from the archives.

The backup utility simply creates a TAR archive of the MHIRA data directory and saves it in configured data backup path.

To restore from backup, you may have multiple archives created at different times (we call them versions). Choose one of them (the latest if you want to restore the most recent copy of your data) and extract it. Copy the extracted data to  the configured MHIRA data save path.

The next subsections give more details on the provided automated backups utility, how to do manual backups, and restore process.

### Automated daily backups

The `MHIRA` docker installation comes with a `backup` helper container, that manages daily backups.

> * The default backup schedule is daily at midnight.
>
> * The backup location is controlled by by `DATA_BACKUP_PATH` key in the `.env` file.
>
> * Default value for `DATA_BACKUP_PATH` is `~/.mhira-docker/backups`

### Manual backup

To manually backup data to current working direcotry

```bash
# >> Using tar zip of the data folder
# This will output the backup file in current directory where it is run
tar -czvf mhira-data-$(date '+%Y-%m-%dT%T').tar.gz ~/.mhira-docker/data
```

To manually backup data to in configured MHIRA backup location

```bash
# >> Using provided backup container
# This will output the backup file in backup path configured in `dotenv` by `DATA_BACKUP_PATH` key
# Default value for `DATA_BACKUP_PATH` is `~/.mhira-docker/backups`
docker-compose up  --build -d backup
```

## Restoring Data

### Manual restore

You may have multiple archives created at different times (we call them versions).

List the files in your data backup directory to see what versions are available

```bash
ls -lrth ~/.mhira-docker/backups
```

Choose one of them (the latest if you want to restore the most recent copy of your data) and extract it.

```bash
tar -xzvf {{replace_with_archive_name}} -C ~/.mhira-docker/
```

### Restore using MHIRA backup utility

The `backup` container provided by the `mhira-docker` installation also provides a handy restore function.

This can be called by running:

```bash
docker compose exec backup /bin/restore
```

This will prompt the user to select a backup archive to restore from.

![Restore-Archives](/resources/images/restore-archives.png "Restore Archives")

On selecting an archive to restore from, the utility will restore the data directory path to the version from that archive.
