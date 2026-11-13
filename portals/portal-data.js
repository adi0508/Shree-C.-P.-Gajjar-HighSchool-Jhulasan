// =========================================================
// SHARED SCHOOL PORTAL DATA ENGINE
// =========================================================

const DEFAULT_SCHOOL_DATA = {
  users: [
    { id: "admin", pass: "principal123", role: "principal", name: "Ambalal Prajapati", designation: "Principal" },
    { id: "aditya", pass: "teacher123", role: "teacher", name: "Aditya Raval", subject: "Science", classAssigned: "Std 10-A" },
    { id: "heena", pass: "teacher123", role: "teacher", name: "Heenaben Agravat", subject: "Languages", classAssigned: "Std 9-A" },
    { id: "dimpal", pass: "teacher123", role: "teacher", name: "Dimpalbahen Suthar", subject: "Social Science", classAssigned: "Std 11-Arts" },
    { id: "101", pass: "student123", role: "student", name: "Patel Aarav R.", std: "Std 10-A", roll: "101" }
  ],
  leaves: [
    {
      id: "LV-1001",
      teacherId: "aditya",
      teacherName: "Aditya Raval",
      type: "Casual Leave (CL)",
      fromDate: "2026-11-16",
      toDate: "2026-11-17",
      days: 2,
      reason: "Attending family social function in Mehsana.",
      proxyTeacher: "Jigishaben Parmar",
      status: "Pending",
      principalRemark: ""
    },
    {
      id: "LV-1002",
      teacherId: "heena",
      teacherName: "Heenaben Agravat",
      type: "Medical Leave (ML)",
      fromDate: "2026-11-14",
      toDate: "2026-11-14",
      days: 1,
      reason: "Dental checkup appointment.",
      proxyTeacher: "Dimpalbahen Suthar",
      status: "Approved",
      principalRemark: "Approved. Proxy informed."
    }
  ],
  notices: [
    {
      id: "NT-1",
      title: "Staff Meeting for Board Exam Preparation",
      audience: "Teachers Only",
      date: "2026-11-13",
      content: "All Std 10 and 12 teachers must assemble in the Principal's office at 4:30 PM tomorrow."
    },
    {
      id: "NT-2",
      title: "Second Term Exam Fees Submission",
      audience: "Students & Parents",
      date: "2026-11-12",
      content: "Submit exam forms and fees to Mr. Ranjitsinh Zala at the clerk office before 20th November."
    }
  ],
  examUploads: [
    {
      id: "EX-1",
      teacherName: "Aditya Raval",
      std: "Std 10-A",
      subject: "Science",
      examName: "Unit Test 2",
      uploadDate: "2026-11-12",
      status: "Pending Approval",
      records: [
        { roll: "101", name: "Patel Aarav R.", marks: 44, maxMarks: 50 },
        { roll: "102", name: "Sharma Diya K.", marks: 48, maxMarks: 50 }
      ]
    }
  ],
  dailyStats: {
    totalStudents: 480,
    presentStudents: 452,
    totalStaff: 9
  }
};

// Initialize storage if empty
function getSchoolData() {
  const existing = localStorage.getItem("cpg_school_portal_db");
  if (!existing) {
    localStorage.setItem("cpg_school_portal_db", JSON.stringify(DEFAULT_SCHOOL_DATA));
    return DEFAULT_SCHOOL_DATA;
  }
  return JSON.parse(existing);
}

function saveSchoolData(data) {
  localStorage.setItem("cpg_school_portal_db", JSON.stringify(data));
}

// Session helpers
function getCurrentUser() {
  const user = sessionStorage.getItem("cpg_active_user");
  return user ? JSON.parse(user) : null;
}

function logoutUser() {
  sessionStorage.removeItem("cpg_active_user");
  window.location.href = "login.html";
}