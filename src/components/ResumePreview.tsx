
import { ResumeData } from "@/types/resume";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview = ({ resumeData }: ResumePreviewProps) => {
  const { personalInfo, objective, education, skills, certifications, languages } = resumeData;

  return (
    <div className="resume-preview text-resume-dark font-sans">
      {/* Header Section */}
      <div className="border-b-2 border-resume-primary pb-4 mb-6">
        <h1 className="text-3xl font-bold text-center text-resume-primary">{personalInfo.name}</h1>
        <div className="flex flex-wrap justify-center gap-3 mt-3 text-sm">
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center">
              <Github className="h-4 w-4 mr-1" />
              <span>{personalInfo.github}</span>
            </div>
          )}
        </div>
      </div>

      {/* Objective Section */}
      {objective && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-resume-primary border-b border-gray-200 pb-1">
            Objective
          </h2>
          <p className="text-sm text-gray-700">{objective}</p>
        </div>
      )}

      {/* Education Section */}
      {education && education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-resume-primary border-b border-gray-200 pb-1">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start">
                <h3 className="text-base font-semibold">{edu.institution}</h3>
                <p className="text-sm text-gray-600">{edu.graduationDate}</p>
              </div>
              <p className="text-sm">
                {edu.degree}
                {edu.gpa && (
                  <span className="font-semibold"> • CGPA: {edu.gpa}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {skills && skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-resume-primary border-b border-gray-200 pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {skills.map((skill, index) => (
              <div key={index} className="text-sm">
                {skill.category && (
                  <span className="font-semibold">{skill.category}: </span>
                )}
                {skill.skills}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications Section */}
      {certifications && certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-resume-primary border-b border-gray-200 pb-1">
            Certifications & Courses
          </h2>
          {certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-start">
                <h3 className="text-base font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.date}</p>
              </div>
              <p className="text-sm">{cert.issuer}</p>
              {cert.link && (
                <p className="text-sm text-resume-secondary">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    Certificate Link
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Languages Section */}
      {languages && languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-resume-primary border-b border-gray-200 pb-1">
            Languages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {languages.map((lang, index) => (
              <div key={index} className="text-sm">
                <span className="font-semibold">{lang.language}</span>
                {lang.proficiency && ` – ${lang.proficiency}`}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reference Section */}
      <div>
        <p className="text-sm italic text-gray-600">Reference available upon request.</p>
      </div>
    </div>
  );
};

export default ResumePreview;
