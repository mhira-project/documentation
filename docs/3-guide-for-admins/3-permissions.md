---
sidebar_position: 3
---

# Permissions

Permissions determine what information users can view and edit within the software. 
They could also be understood as the rights the user has to do and see things in the software. 

## Permission types

MHIRA comes with a number of permissions. These permissions are often subdivided into different types:
- view (read)
- view all (this type of permission circumvents the restriction to see certain patients or caregiver, making it possible to see all entries regardless of [department](https://mhira-project.github.io/documentation/docs/guide-for-admins/departments))
- manage (create and update)
- delete 

:::warning

Use of the delete type permissions should be strongly restricted. 

:::

## Permission objects

- Patients: Access the list of patients and access the patient detail view
- Users: Access the list of users and user detail view
- Assessments: Access assessment list and assessment detail view
- Questionnaires: Access questionnaire list and questionnaire detail view
- Caregivers: Access caregiver list
- Settings: Access all settings under the administration menu (roles, permissions, departments, patient statuses, assessment titles, disclaimers, reports)

:::tip
- To effectively use assessments, the permisson "view users" is required. This is because assessment mangagers need to be selected and users can be informants of the assessments.
- Addtionally, it is required to 'view patients' and to 'view questionnaires'to plan assessments. 
- Managing type permissions only work if viewing is also selected
:::

## Linking permissions to [user roles](https://mhira-project.github.io/documentation/docs/guide-for-admins/roles) 

Permissions are set via the menu 'Permission Matrix' accessible from the navigation menu under administration.

- The roles you created in the previous step will show up as colums.
- The permissions are shown in the rows. 

**To link a permission to a role, click on the cell at the intersection of the role and the permisson**
A tick mark will apprear to indicate that the permission has been linked to the role. 


## Examples of permissions for differnt [roles](https://mhira-project.github.io/documentation/docs/guide-for-admins/roles) 

### Clinician 
- view patients
- manage patients
- view assessments
- manage assessments
- view caregivers
- manage caregivers
- view users
- view questionnaires

### Patient manager
- view all patients
- manage patients
- delete patients

### User Manager
- view users
- manage users
- view settings

### Questionnaire Manager
- view questionnaires
- manage questionnaires

### Administrator 
- view settings
- manage settings
- view users
- manage users









