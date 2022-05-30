---
sidebar_position: 1
---

# Superadmin

When MHIRA is installed, it has one user role and one user account pre-intalled.
You will need to use this account to create access for other roles and users. 

The person installing MHIRA ([see intallation guide](https://mhira-project.github.io/documentation/docs/category/installation-guide)), will set a password during this installation. You will need this password for your first login to MHIRA.

Using your internet browser, navigate to the URL (address entered into the browser, e.g., https://mhira.myhospital.com) under which MHIRA is accessible for you.
This will be take you to a [login screen](https://mhira-project.github.io/documentation/docs/user-manual/access).
Enter the username: *superadmin* and the password. 

Now, the software will force you to change the password for this user. 
Make sure to save this password in a secure location or to remember it. 
Also make sure that the password is strong.
In case you loose this password, there is a [recovery procedure](https://mhira-project.github.io/documentation/docs/installation-guide/admin-password-reset) but it will need access to the command line of the server. 

:::warn
The superadmin account has all the permissions you can have in MHIRA. 
However, it can not be changed. 
Thus, the superadmin cannot be assigned to any [department](https://mhira-project.github.io/documentation/docs/guide-for-admins/departments). Consequently, you cannot create patients with this account. 
:::

:::tip

We recommend only using the superadmin account to create other (e.g., administration) accounts and set initial roles and persmissions. 
Use accounts with more restricted access for daily activities.

:::


