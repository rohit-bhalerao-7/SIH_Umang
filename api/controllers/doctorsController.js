const Doctor = require("../models/doctorModel"); // Sequelize model for Doctor
const mockDoctors = require("../../data/mockdoctors");

const addDoctor = async (req, res) => {
  try {
    const { name, specialization, availability, contact_info, qualification } =
      req.body;
    const doctor = await Doctor.create({
      name,
      specialization,
      availability,
      contact_info,
      qualification,
    });
    res.status(201).json({ message: "Doctor added", doctor });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding doctor", error: error.message });
  }
};

const updateDoctorInformation = async (req, res) => {
  try {
    const { doctor_id } = req.params;
    const updateData = req.body;
    const [updated] = await Doctor.update(updateData, {
      where: { id: doctor_id },
    });
    if (updated) {
      const updatedDoctor = await Doctor.findOne({ where: { id: doctor_id } });
      res.json({
        message: "Doctor information updated",
        doctor: updatedDoctor,
      });
    } else {
      throw new Error("Doctor not found");
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating doctor information",
        error: error.message,
      });
  }
};

const getDoctorDetails = async (req, res) => {
  try {
    const { doctor_id } = req.params;
    const doctor = await Doctor.findOne({ where: { id: doctor_id } });
    if (doctor) {
      res.json({ doctor });
    } else {
      res.status(404).json({ message: "Doctor not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving doctor details",
        error: error.message,
      });
  }
};

const getDoctorsBySpecialization = (specialization) => {
  return mockDoctors.filter(
    (doctor) => doctor.specialization === specialization
  );
};

// const addMockDoctors = async (req, res) => {
//   try {
//     const mockDoctors = [
//       {
//         id: 1,
//         name: "Dr. Ramesh Sharma",
//         specialization: "Cardiologist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "123-456-7890",
//         qualification: "MD, Cardiology",
//       },
//       {
//         id: 2,
//         name: "Dr. Priya Patel",
//         specialization: "Dermatologist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "987-654-3210",
//         qualification: "MD, Dermatology",
//       },
//       {
//         id: 3,
//         name: "Dr. Rajesh Kumar",
//         specialization: "Orthopedic Surgeon",
//         availability: "Wednesday, Friday, Sunday",
//         contact_info: "567-890-1234",
//         qualification: "MS, Orthopedics",
//       },
//       {
//         id: 4,
//         name: "Dr. Shalini Gupta",
//         specialization: "Gynecologist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "234-567-8901",
//         qualification: "MD, Obstetrics and Gynecology",
//       },
//       {
//         id: 5,
//         name: "Dr. Anand Verma",
//         specialization: "Pediatrician",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "678-901-2345",
//         qualification: "MD, Pediatrics",
//       },
//       {
//         id: 6,
//         name: "Dr. Nisha Singh",
//         specialization: "Ophthalmologist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "345-678-9012",
//         qualification: "MS, Ophthalmology",
//       },
//       {
//         id: 7,
//         name: "Dr. Sanjay Mishra",
//         specialization: "ENT Specialist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "789-012-3456",
//         qualification: "MS, Otolaryngology",
//       },
//       {
//         id: 8,
//         name: "Dr. Pooja Agarwal",
//         specialization: "Neurologist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "456-789-0123",
//         qualification: "MD, Neurology",
//       },
//       {
//         id: 9,
//         name: "Dr. Rahul Khanna",
//         specialization: "Psychiatrist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "890-123-4567",
//         qualification: "MD, Psychiatry",
//       },
//       {
//         id: 10,
//         name: "Dr. Ayesha Khan",
//         specialization: "Dentist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "567-890-1234",
//         qualification: "BDS, Dentistry",
//       },
//       {
//         id: 11,
//         name: "Dr. Manish Joshi",
//         specialization: "Urologist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "123-456-7890",
//         qualification: "MS, Urology",
//       },
//       {
//         id: 12,
//         name: "Dr. Meena Gupta",
//         specialization: "Radiologist",
//         availability: "Wednesday, Friday, Sunday",
//         contact_info: "987-654-3210",
//         qualification: "MD, Radiology",
//       },
//       {
//         id: 13,
//         name: "Dr. Arjun Singh",
//         specialization: "General Surgeon",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "234-567-8901",
//         qualification: "MS, General Surgery",
//       },
//       {
//         id: 14,
//         name: "Dr. Ananya Sharma",
//         specialization: "Dietitian",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "678-901-2345",
//         qualification: "MSc, Nutrition",
//       },
//       {
//         id: 15,
//         name: "Dr. Sameer Jain",
//         specialization: "Physiotherapist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "345-678-9012",
//         qualification: "BPT, Physiotherapy",
//       },
//       {
//         id: 16,
//         name: "Dr. Swati Choudhary",
//         specialization: "Gastroenterologist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "789-012-3456",
//         qualification: "MD, Gastroenterology",
//       },
//       {
//         id: 17,
//         name: "Dr. Rajat Verma",
//         specialization: "Dermatologist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "456-789-0123",
//         qualification: "MD, Dermatology",
//       },
//       {
//         id: 18,
//         name: "Dr. Shikha Kapoor",
//         specialization: "Oncologist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "890-123-4567",
//         qualification: "MD, Oncology",
//       },
//       {
//         id: 19,
//         name: "Dr. Sunil Khatri",
//         specialization: "Endocrinologist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "567-890-1234",
//         qualification: "MD, Endocrinology",
//       },
//       {
//         id: 20,
//         name: "Dr. Preeti Singhania",
//         specialization: "Rheumatologist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "123-456-7890",
//         qualification: "MD, Rheumatology",
//       },
//       {
//         id: 21,
//         name: "Dr. Vishal Sharma",
//         specialization: "Nephrologist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "234-567-8901",
//         qualification: "MD, Nephrology",
//       },
//       {
//         id: 22,
//         name: "Dr. Anjali Gupta",
//         specialization: "Pulmonologist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "987-654-3210",
//         qualification: "MD, Pulmonology",
//       },
//       {
//         id: 23,
//         name: "Dr. Ajay Patel",
//         specialization: "Hematologist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "567-890-1234",
//         qualification: "MD, Hematology",
//       },
//       {
//         id: 24,
//         name: "Dr. Seema Kapoor",
//         specialization: "Allergist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "678-901-2345",
//         qualification: "MD, Allergy & Immunology",
//       },
//       {
//         id: 25,
//         name: "Dr. Karan Joshi",
//         specialization: "Geriatrician",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "345-678-9012",
//         qualification: "MD, Geriatric Medicine",
//       },
//       {
//         id: 26,
//         name: "Dr. Meenakshi Sharma",
//         specialization: "Neurologist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "789-012-3456",
//         qualification: "MD, Neurology",
//       },
//       {
//         id: 27,
//         name: "Dr. Manoj Kumar",
//         specialization: "Podiatrist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "456-789-0123",
//         qualification: "DPM, Podiatry",
//       },
//       {
//         id: 28,
//         name: "Dr. Aarti Verma",
//         specialization: "Cardiologist",
//         availability: "Tuesday, Thursday, Saturday",
//         contact_info: "890-123-4567",
//         qualification: "MD, Cardiology",
//       },
//       {
//         id: 29,
//         name: "Dr. Vikram Singh",
//         specialization: "Urologist",
//         availability: "Monday, Wednesday, Friday",
//         contact_info: "123-456-7890",
//         qualification: "MS, Urology",
//       },
//       {
//         id: 30,
//         name: "Dr. Aarti Kapoor",
//         specialization: "Psychiatrist",
//         availability: "Wednesday, Friday, Sunday",
//         contact_info: "456-789-0123",
//         qualification: "MD, Psychiatry",
//       },
//     ];

//     module.exports = mockDoctors;

//     const createdDoctors = await Doctor.bulkCreate(mockDoctors, {
//       validate: true,
//     });

//     res
//       .status(201)
//       .json({ message: "Mock doctors added successfully", createdDoctors });
//   } catch (error) {
//     console.error("Validation error:", error.errors); // Log validation errors
//     res
//       .status(500)
//       .json({ message: "Error adding mock doctors", error: error.message });
//   }
// };

module.exports = {
  addDoctor,
  updateDoctorInformation,
  getDoctorDetails,
  getDoctorsBySpecialization,
  
};
