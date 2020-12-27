# Contributing Guidelines  
  
This documentation contains a set of guidelines to help you during the contribution process.   
We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project. Thank you for helping out and remember, **no contribution is too small.**  
  
# Submitting Contributions👩‍💻👨‍💻  
Below you will find the process and workflow used to review and merge your changes.  

## Step 0 : Find an issue  🔍
- Take a look at the Existing Issues or create your **own** Issues!  
- Wait for the Issue to be assigned to you after which you can start working on it.  
- Note : Every change in this project should/must have an associated issue.   
![issue](https://github.com/kanishkaa24/Community-Website/blob/main/1.png)  
  
## Step 1 : Fork the Project 🍴
- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile. Keep a reference to the original project in `upstream` remote.  
```  
$ git clone https://github.com/<your-username>/Community-Website  
$ cd <repo-name>  
$ git remote add upstream https://github.com/HITK-TECH-Community/Community-Website 
```  
![fork](https://github.com/kanishkaa24/Community-Website/blob/main/2.png)  
  
- Update your forked repo before working.  
```  
$ git remote update  
$ git checkout <branch-name>  
$ git rebase upstream/<branch-name>  
```  
## Step 2 : Branch  🔖
Create a new branch. Use its name to identify the issue you are addressing.  
```  
# It will create a new branch with name Branch_Name and switch to that branch 
$ git checkout -b branch_name  
```  
## Step 3 : Work on the issue assigned  📕
- Work on the issue(s) assigned to you.   
- Add all the files/folders needed.  
- After you've made changes or made your contribution to the project add changes to the branch you've just created by:  
```  
# To add all new files to branch Branch_Name  
$ git add .  

# To add only a few files to Branch_Name
$ git add <some files>
```
  
## Step 4 : Commit  
- To commit give a descriptive message for the convenience of reviewer by:  
```
# This message get associated with all files you have changed  
$ git commit -m "message"  
``` 
 
## Step 5 : Work Remotely  
- Now you are ready to your work to the remote repository.  
- When your work is ready and complies with the project conventions, upload your changes to your fork:  
  
```  
# To push your work to your remote repository  
$ git push -u origin <branch_name>  
```  
- Here is how your branch will look.  
![br](https://github.com/kanishkaa24/Community-Website/blob/main/3.png)  
  
## Step 6 : Pull Request  🎣
- Go to your repository in browser and click on compare and pull requests. Then add a title and description to your pull request that explains your contribution.  
![pullrequest](https://github.com/kanishkaa24/Community-Website/blob/main/4.png) 
- Voila! Your Pull Request has been submitted and will be reviewed by the moderators and merged.🥳  
  
## Need more help?🤔  
You can refer to the following articles on basics of Git and Github and also contact the Project Mentors, in case you are stuck:  
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)  
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)  
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)  
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)  
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)  
  
  
## Tip from us😇  
It always takes time to understand and learn. So, do not worry at all. We know **you have got this**!💪
