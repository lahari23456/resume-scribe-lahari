
import { useState } from "react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { ResumeData } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: "Lahari T",
      phone: "6362780922",
      email: "laharitammineedi13@gmail.com",
      linkedin: "",
      github: "",
      location: "Bengaluru",
    },
    objective: "As a 4th-semester engineering student, my primary objective is to strengthen my technical foundation while developing practical skills that align with my career goals. At this stage, I aim to gain a deeper understanding of core subjects and apply theoretical knowledge to real-world problems through projects, internships, and hands-on learning. Enhancing my problem-solving abilities, analytical thinking, and technical expertise in my specialization is crucial for preparing myself for future opportunities. I also focus on improving my communication and teamwork skills, as they are essential for professional growth. By actively participating in workshops, industry certifications, and networking with professionals, I strive to build a strong profile that will help me secure internships, excel in my field, and work towards my long-term goal of a successful engineering career.",
    education: [
      {
        institution: "RV Institution of Technology and Management, Bengaluru",
        degree: "BE in Information Science & Engineering",
        graduationDate: "July 2027",
        gpa: "8.21",
      }
    ],
    skills: [
      { category: "Programming Languages", skills: "Python, Java, C" },
      { category: "Web Development", skills: "HTML" },
      { category: "Database Management", skills: "SQL, MySQL" },
      { category: "Tools & Technologies", skills: "MATLAB, Tableau" },
    ],
    certifications: [
      {
        title: "Stacks in Data Structures",
        issuer: "Mindluster",
        date: "2024",
        link: "",
      }
    ],
    languages: [
      { language: "English", proficiency: "Proficient" },
      { language: "Telugu", proficiency: "" },
      { language: "Kannada", proficiency: "" },
    ],
  });

  const handleUpdateResumeData = (newData: Partial<ResumeData>) => {
    setResumeData(prevData => ({
      ...prevData,
      ...newData
    }));
    toast.success("Resume updated successfully!");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-resume-primary text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">Resume Scribe</h1>
          <p className="text-sm md:text-base opacity-90">Build your professional resume in minutes</p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <Tabs defaultValue="edit" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="edit">Edit Resume</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="edit">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <ResumeForm 
                resumeData={resumeData} 
                updateResumeData={handleUpdateResumeData} 
              />
            </div>
          </TabsContent>
          
          <TabsContent value="preview">
            <div className="flex flex-col items-center">
              <Button 
                className="mb-4 bg-resume-secondary hover:bg-resume-primary print:hidden"
                onClick={handlePrint}
              >
                Download PDF
              </Button>
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto">
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <ChatbotWidget />
      
      <footer className="mt-auto bg-gray-100 p-4 border-t print:hidden">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          © 2025 Resume Scribe - Create beautiful resumes easily
        </div>
      </footer>

      <style>
        {`
        @media print {
          body * {
            visibility: hidden;
          }
          .resume-preview, .resume-preview * {
            visibility: visible;
          }
          .resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Index;
