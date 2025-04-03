
import { useState } from "react";
import { ResumeData } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";

interface ResumeFormProps {
  resumeData: ResumeData;
  updateResumeData: (data: Partial<ResumeData>) => void;
}

const ResumeForm = ({ resumeData, updateResumeData }: ResumeFormProps) => {
  // Personal Info State
  const [personalInfo, setPersonalInfo] = useState(resumeData.personalInfo);
  
  // Objective State
  const [objective, setObjective] = useState(resumeData.objective);
  
  // Education State
  const [education, setEducation] = useState(resumeData.education);
  
  // Skills State
  const [skills, setSkills] = useState(resumeData.skills);
  
  // Certifications State
  const [certifications, setCertifications] = useState(resumeData.certifications);
  
  // Languages State
  const [languages, setLanguages] = useState(resumeData.languages);
  
  // Update Personal Info
  const handlePersonalInfoChange = (field: keyof typeof personalInfo, value: string) => {
    const updatedPersonalInfo = { ...personalInfo, [field]: value };
    setPersonalInfo(updatedPersonalInfo);
    updateResumeData({ personalInfo: updatedPersonalInfo });
  };
  
  // Update Objective
  const handleObjectiveChange = (value: string) => {
    setObjective(value);
    updateResumeData({ objective: value });
  };

  // Add Education
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      graduationDate: "",
      gpa: "",
    };
    const updatedEducation = [...education, newEducation];
    setEducation(updatedEducation);
    updateResumeData({ education: updatedEducation });
  };
  
  // Update Education
  const updateEducation = (index: number, field: keyof typeof education[0], value: string) => {
    const updatedEducation = education.map((edu, i) => 
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducation(updatedEducation);
    updateResumeData({ education: updatedEducation });
  };
  
  // Remove Education
  const removeEducation = (index: number) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
    updateResumeData({ education: updatedEducation });
  };

  // Add Skill
  const addSkill = () => {
    const newSkill = {
      category: "",
      skills: "",
    };
    const updatedSkills = [...skills, newSkill];
    setSkills(updatedSkills);
    updateResumeData({ skills: updatedSkills });
  };
  
  // Update Skill
  const updateSkill = (index: number, field: keyof typeof skills[0], value: string) => {
    const updatedSkills = skills.map((skill, i) => 
      i === index ? { ...skill, [field]: value } : skill
    );
    setSkills(updatedSkills);
    updateResumeData({ skills: updatedSkills });
  };
  
  // Remove Skill
  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    updateResumeData({ skills: updatedSkills });
  };

  // Add Certification
  const addCertification = () => {
    const newCertification = {
      title: "",
      issuer: "",
      date: "",
      link: "",
    };
    const updatedCertifications = [...certifications, newCertification];
    setCertifications(updatedCertifications);
    updateResumeData({ certifications: updatedCertifications });
  };
  
  // Update Certification
  const updateCertification = (index: number, field: keyof typeof certifications[0], value: string) => {
    const updatedCertifications = certifications.map((cert, i) => 
      i === index ? { ...cert, [field]: value } : cert
    );
    setCertifications(updatedCertifications);
    updateResumeData({ certifications: updatedCertifications });
  };
  
  // Remove Certification
  const removeCertification = (index: number) => {
    const updatedCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCertifications);
    updateResumeData({ certifications: updatedCertifications });
  };

  // Add Language
  const addLanguage = () => {
    const newLanguage = {
      language: "",
      proficiency: "",
    };
    const updatedLanguages = [...languages, newLanguage];
    setLanguages(updatedLanguages);
    updateResumeData({ languages: updatedLanguages });
  };
  
  // Update Language
  const updateLanguage = (index: number, field: keyof typeof languages[0], value: string) => {
    const updatedLanguages = languages.map((lang, i) => 
      i === index ? { ...lang, [field]: value } : lang
    );
    setLanguages(updatedLanguages);
    updateResumeData({ languages: updatedLanguages });
  };
  
  // Remove Language
  const removeLanguage = (index: number) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
    updateResumeData({ languages: updatedLanguages });
  };

  return (
    <div className="space-y-8">
      <Accordion type="single" collapsible defaultValue="personal" className="w-full">
        {/* Personal Information */}
        <AccordionItem value="personal">
          <AccordionTrigger className="text-lg font-semibold">Personal Information</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={personalInfo.name}
                  onChange={(e) => handlePersonalInfoChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={personalInfo.email}
                  onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={personalInfo.phone}
                  onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={personalInfo.location}
                  onChange={(e) => handlePersonalInfoChange("location", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn URL</Label>
                <Input
                  id="linkedin"
                  value={personalInfo.linkedin}
                  placeholder="https://linkedin.com/in/yourprofile"
                  onChange={(e) => handlePersonalInfoChange("linkedin", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github">GitHub URL</Label>
                <Input
                  id="github"
                  value={personalInfo.github}
                  placeholder="https://github.com/yourusername"
                  onChange={(e) => handlePersonalInfoChange("github", e.target.value)}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Objective */}
        <AccordionItem value="objective">
          <AccordionTrigger className="text-lg font-semibold">Objective</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Label htmlFor="objective">Career Objective</Label>
              <Textarea
                id="objective"
                rows={6}
                value={objective}
                onChange={(e) => handleObjectiveChange(e.target.value)}
                className="resize-none"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Education */}
        <AccordionItem value="education">
          <AccordionTrigger className="text-lg font-semibold">Education</AccordionTrigger>
          <AccordionContent>
            {education.map((edu, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Education #{index + 1}</h3>
                    <Button 
                      variant="destructive" 
                      size="icon" 
                      onClick={() => removeEducation(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`institution-${index}`}>Institution</Label>
                      <Input
                        id={`institution-${index}`}
                        value={edu.institution}
                        onChange={(e) => updateEducation(index, "institution", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`degree-${index}`}>Degree</Label>
                      <Input
                        id={`degree-${index}`}
                        value={edu.degree}
                        onChange={(e) => updateEducation(index, "degree", e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`graduation-${index}`}>Graduation Date</Label>
                        <Input
                          id={`graduation-${index}`}
                          value={edu.graduationDate}
                          onChange={(e) => updateEducation(index, "graduationDate", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`gpa-${index}`}>GPA/CGPA</Label>
                        <Input
                          id={`gpa-${index}`}
                          value={edu.gpa}
                          onChange={(e) => updateEducation(index, "gpa", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              className="w-full bg-resume-primary hover:bg-resume-secondary"
              onClick={addEducation}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Education
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Skills */}
        <AccordionItem value="skills">
          <AccordionTrigger className="text-lg font-semibold">Technical Skills</AccordionTrigger>
          <AccordionContent>
            {skills.map((skill, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Skill Category #{index + 1}</h3>
                    <Button 
                      variant="destructive" 
                      size="icon" 
                      onClick={() => removeSkill(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`category-${index}`}>Category</Label>
                      <Input
                        id={`category-${index}`}
                        placeholder="e.g., Programming Languages, Web Development, etc."
                        value={skill.category}
                        onChange={(e) => updateSkill(index, "category", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`skills-${index}`}>Skills</Label>
                      <Input
                        id={`skills-${index}`}
                        placeholder="e.g., Python, Java, HTML, CSS, etc."
                        value={skill.skills}
                        onChange={(e) => updateSkill(index, "skills", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              className="w-full bg-resume-primary hover:bg-resume-secondary"
              onClick={addSkill}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Skill Category
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Certifications */}
        <AccordionItem value="certifications">
          <AccordionTrigger className="text-lg font-semibold">Certifications & Courses</AccordionTrigger>
          <AccordionContent>
            {certifications.map((cert, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Certification #{index + 1}</h3>
                    <Button 
                      variant="destructive" 
                      size="icon" 
                      onClick={() => removeCertification(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`cert-title-${index}`}>Title</Label>
                      <Input
                        id={`cert-title-${index}`}
                        value={cert.title}
                        onChange={(e) => updateCertification(index, "title", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`cert-issuer-${index}`}>Issuer</Label>
                      <Input
                        id={`cert-issuer-${index}`}
                        value={cert.issuer}
                        onChange={(e) => updateCertification(index, "issuer", e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`cert-date-${index}`}>Date</Label>
                        <Input
                          id={`cert-date-${index}`}
                          value={cert.date}
                          onChange={(e) => updateCertification(index, "date", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`cert-link-${index}`}>Certificate Link</Label>
                        <Input
                          id={`cert-link-${index}`}
                          value={cert.link}
                          onChange={(e) => updateCertification(index, "link", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              className="w-full bg-resume-primary hover:bg-resume-secondary"
              onClick={addCertification}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Certification
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Languages */}
        <AccordionItem value="languages">
          <AccordionTrigger className="text-lg font-semibold">Languages</AccordionTrigger>
          <AccordionContent>
            {languages.map((lang, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Language #{index + 1}</h3>
                    <Button 
                      variant="destructive" 
                      size="icon" 
                      onClick={() => removeLanguage(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`language-${index}`}>Language</Label>
                      <Input
                        id={`language-${index}`}
                        value={lang.language}
                        onChange={(e) => updateLanguage(index, "language", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`proficiency-${index}`}>Proficiency Level</Label>
                      <Input
                        id={`proficiency-${index}`}
                        placeholder="e.g., Basic, Intermediate, Proficient, Native"
                        value={lang.proficiency}
                        onChange={(e) => updateLanguage(index, "proficiency", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              className="w-full bg-resume-primary hover:bg-resume-secondary"
              onClick={addLanguage}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Language
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ResumeForm;
