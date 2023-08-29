### All about Git and Version Control

#### Q1) What is Version Contol?

**Version Control** is a system that allows you to revisit various versions of a file or set of files by recording changes. 

#### Q2) What is Git?

**Git** is a **DVCS** - a Digital Version Control System

#### Q3) What is cloning in Git?

In Git, **cloning** is copying all versions of a file for a project. 

#### Q4) What is the command to track and stage files?

In the terminal, the command to track and stage files is 

> git add <filename>

#### Q5) What is the command to take a snapshot of your changed files?

> git commit

To commit the changes *and* record what you did within the commit message:

> git commit -m “change message here”

#### Q6) What is the command to send your changed files to Github?

> git push

This pushes (sends) changes to a remote repository. 

> git push origin master
> 
This command pushes changes from the local “master” branch to the remote repository named “origin”.

*For cloned repositories, Git will automatically give the name “origin” to the server from which you cloned and the name “master” to your local repository. However, these names can be changed by the user.*
