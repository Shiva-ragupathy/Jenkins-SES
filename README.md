# Jenkins-SES Integration Project

## 📌 Overview
This project demonstrates Continuous Integration using **Jenkins** with a GitHub repository.  
Whenever a new commit is pushed to the repository, Jenkins automatically triggers a build and sends the build output/logs via email.

---

## ⚙️ Technologies Used
- GitHub (Version Control)
- Jenkins (CI/CD Tool)
- Shell Script (Build Execution)
- Email Notification (SES / SMTP)

---

## 🚀 Workflow

1. Code is pushed to GitHub repository.
2. Jenkins is connected to the repository.
3. A webhook or polling detects the new commit.
4. Jenkins triggers an automatic build.
5. Build script executes successfully.
6. Build logs/output are sent to the configured email.

---

## 📂 Project Structure


### 2. Configure Jenkins Job
- Create a new Freestyle Project
- Connect to GitHub repository
- Add build step:
  - Execute Shell → `sh script.sh`

### 3. Configure Build Trigger
- Enable:
  - GitHub webhook trigger OR
  - Poll SCM

### 4. Configure Email Notification
- Go to **Post-build Actions**
- Add:
  - Editable Email Notification
- Configure:
  - Recipient email
  - Attach build logs (optional)

---

## 📧 Output
- On every commit:
  - Jenkins automatically runs the build
  - Email is sent with build status and logs

---

## 🔒 Notes
- If repository is public, code is visible to everyone
- Avoid printing sensitive data in scripts
- Use private repositories for secure projects

---

## ✅ Sample Script


---

## 📌 Author
Shiva rama krishnan

---

## ⭐ Conclusion
This project helps understand how Jenkins automates builds and integrates with GitHub for continuous deployment workflows.
