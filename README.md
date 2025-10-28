# 🏛️ PSYSIX — A Unified Digital Command Center for Transparent Governance and Welfare Scheme Management

## 🎯 Problem Statement
**SIH25153 - Mapping of Implementing and Executing Agencies across PM-AJAY Components**

Managing the **Pradhan Mantri Anusuchit Jaati Abhyuday Yojana (PM-AJAY)** involves multiple ministries, states, and executing agencies.  
The existing system faces critical challenges:
- ❌ Unclear roles and responsibilities  
- 🕒 Delayed fund flow and disbursement  
- 🔁 Scattered communication channels  
- 📉 Lack of unified monitoring and tracking  

---

## 💡 Our Solution
**PSYSIX** is a **centralized platform** connecting the Centre, States, and Executing Agencies under one transparent ecosystem — enabling **real-time monitoring**, **accountability**, and **seamless coordination**.

---

## ✨ Key Features
- 💰 **Real-time Fund Tracking** – Complete digital audit trail from allocation to utilization  
- 🧭 **Role Mapping** – Clear accountability across all governance levels  
- 🗺️ **Geo-tagged Progress Monitoring** – Evidence-based tracking with photo/document uploads  
- 📊 **Role-based Dashboards** – Customized views for Central, State, and Agency levels  
- ⚡ **Kafka-based Notifications** – Real-time alerts and updates  
- ☁️ **Cloud-native Architecture** – Scalable microservices on Kubernetes  

---

## 🧠 Tech Stack

### 🧩 Current (Prototype)
- **Frontend:** Next.js, React  

### 🏗️ Full Implementation
| Layer | Technology |
|:------|:------------|
| **Frontend** | Next.js |
| **Backend** | Spring Boot |
| **Message Queue** | Apache Kafka |
| **Database** | PostgreSQL |
| **Cache** | Redis |
| **Storage** | AWS S3 |
| **Monitoring** | ELK Stack (Elasticsearch, Logstash, Kibana) |
| **Containerization** | Docker |
| **Orchestration** | Kubernetes |

---

## 🚀 Getting Started

### ✅ Prerequisites
Ensure you have the following installed:
- **Node.js 18+**
- **npm / yarn / pnpm / bun**

### ⚙️ Installation
```bash
# Clone the repository
git clone <repository-url>
cd psysix

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📂 Project Structure
The application consists of three main dashboard views:

| Path | Description |
|:-----|:-------------|
| `/central/dashboard` | Central Government monitoring and control |
| `/state/dashboard` | State-level implementation tracking |
| `/agency/dashboard` | Executing agency operations and reporting |

---

## 🌍 Impact

### 🏢 For Government
- Complete visibility across all PM-AJAY components  
- Faster, data-driven policymaking  
- Real-time monitoring and intervention  

### ⚙️ For Agencies
- Streamlined fund flow and approvals  
- Clear communication channels  
- Reduced administrative overhead  

### 👥 For Citizens
- Faster delivery of welfare projects  
- Improved transparency and trust in governance  
- Better accountability mechanisms  

---

## 🔗 Links
- 🌐 **Live Prototype:** [https://sih-25153.vercel.app/](https://sih-25153.vercel.app/)  
- 🧾 **Problem Statement:** SIH25153  

---

## 👥 Team
**PSYSIX - SVNIT Surat**

---

## 🏆 Challenge Details
- **Theme:** Smart Automation  
- **Category:** Software  
- **Event:** Smart India Hackathon 2025  

---

## 📌 Vision
> To build a transparent, accountable, and data-driven governance platform that ensures every rupee reaches its intended beneficiary — transforming how welfare schemes are monitored and implemented across India.

---

> 🧱 **Note:** This is currently a basic Next.js prototype.  
> The full production version will implement the complete **microservices architecture** with a **Spring Boot backend**, **Kafka messaging**, and **cloud-native deployment** on **Kubernetes**.
