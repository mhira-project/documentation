---
sidebar_position: 4
---

# Data and Backup

## Data storage location

[Please consult this section](2-installing-mhira.md#data-storage-location)

## Backup data

### Automated daily backups

The `MHIRA` docker installation comes with a `backup` helper container, that manages daily backups.

> * The default backup schedule is daily at midnight.
>
> * The backup location is controlled by the `DATA_BACKUP_PATH` key in the `.env` file.
>
> * The default value for `DATA_BACKUP_PATH` is `~/.mhira-docker/backups`
>
> * The backup utility creates a TAR archive of the MHIRA data directory and saves it in configured data backup path.

:::warning

* It is recommended to use a different hard drive for backup storage, or where possible Remote Backup to a different location. This will make sure your data can be restored in case of hard drive failure or other incidents.

* Please refer to your oganizations guidelines regarding best practices for backing up data and disaster recovery.

:::



### Manual backup

To manually backup data to the current working directory

```bash
# >> Using tar zip of the data folder
# This will output the backup file in current directory where it is run
tar -czvf mhira-data-$(date '+%Y-%m-%dT%T').tar.gz ~/.mhira-docker/data
```

To manually backup data using MHIRA backup utility

```bash
# >> Using provided backup container
# This will output the backup file in backup path configured in `dotenv` by `DATA_BACKUP_PATH` key
# Default value for `DATA_BACKUP_PATH` is `~/.mhira-docker/backups`
docker compose exec backup /bin/backup
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
docker-compose exec backup /bin/restore

```

This will prompt the user to select a backup archive to restore from.

![Restore-Archives](./img/restore-archives.png "Restore Archives")

On selecting an archive to restore from, the utility will restore the data directory path to the version from that archive.