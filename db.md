Table Organization as O {
  id int [pk, increment] // Primary key, auto-increment
  name varchar // Name of the organization
  contact_email varchar // Email address for contacting the organization
  phone_number varchar // Phone number of the organization
}

Table user as U {
  id int [pk, increment] // Primary key, auto-increment
  password text [not null]
  org_id int [ref:> O.id]
  firstName varchar [not null]
  lastName varchar [not null]
  emailAddress varchar [not null, unique]
  roleId int [ref: > R.id, null] // Foreign key reference to the role table
  locationId int [ref: > L.id, null] // Foreign key reference to the location table
  securityGroup varchar [not null] // A textual identifier for the user's security group
}
// Admin will have editing power

Table skill_category as C {
  id int [pk, increment] // auto-increment
  org_id int [not null, ref: > O.id]
  name varchar [not null]
  description text
}

Table skill as S {
  id int [pk, increment] // auto-increment
  name varchar [not null]
  description text
  org_id int [ref: > O.id]
  skill_category_id int [not null, ref: > C.id] // foreign key reference to skill_category table
  proficiency_level int [default: 0] // Default proficiency level set to 0
}

Table role as R {
  id int [pk, increment] // auto-increment
  name varchar [not null]
  description text
  org_id int [not null, ref:> O.id]
  parent_id int [null, ref: > R.id] // Self-referencing foreign key, can be null
}

Table role_skill_targets as RST {
  id int [pk, increment] // auto-increment
  role_id int [not null, ref: > R.id] // Foreign key to the role table
  skill_id int [not null, ref: > S.id] // Foreign key to the skill table
  target varchar [not null]// Description of the target or target metric
}


Table location as L {
  id int [pk, increment] // auto-increment
  org_id int [not null, ref:> O.id]
  name varchar [not null]
  description text
  latitude decimal(9,6) [not null] // Precision for latitude
  longitude decimal(9,6) [not null] // Precision for longitude
}




Table user_skill as US {
  userId int [ref: > U.id] // Foreign key reference to the user table
  skillId int [ref: > S.id] // Foreign key reference to the skill table
  rating int [default: 0, note: 'Rating between 0 and 5']
  proficiency int [default: 0, note: 'Default proficiency level between 0 and 5']
}



Table training as T {
  trainingId int [pk, increment] // Primary key, auto-increment
  org_id int [ref:>O.id]
  name varchar [not null]
  target varchar [not null] // Target audience or goal of the training
  skillId int [ref: > S.id] // Foreign key reference to the skill table
  duration varchar [not null] // Duration can be in hours, days, etc.
  description text
  url varchar // Link to training materials or external platform
  instructor varchar // Name of the trainer or training provider
  startDate date // When the training starts
  endDate date // When the training ends
}



Table skill_audit_logs as SAL {
  org_id int [ref:>O.id]
  id int [pk, increment] // primary key and auto-increment
  evidenceId int [ref: > ET.id] // Type of action performed on the skill, e.g., 'create', 'update', 'delete'
  skill_id int [ref: > S.id] // Foreign key reference to the skill table, indicating which skill was affected
  user_id int [ref: > U.id]
  approver_id int [ref: > U.id] // Foreign key reference to the user table, indicating who performed the action
  timestamp datetime // When the action was performed
  feedback text // Additional details about the action if needed
  rating int
}

Table evidence_type as ET {
  org_id int [ref:>O.id]
  id int [pk, increment] // Primary key and auto-increment
  name varchar // Name of the evidence type, e.g., 'Document', 'Video', 'Testimonial'
  description text // Description of the evidence type
}


Table evidence_details as ED {
  id int [pk, increment] // Primary key and auto-increment
  auditId int [ref: > SAL.id] // Foreign key reference to the AuditLogs table for auditing
  typeId int [ref: > ET.id] // Foreign key reference to the evidence_type table for categorization
  evidenceId int [ref: > T.trainingId] // Foreign key reference to specific evidence (e.g., training ID)
  org_id int [ref:>O.id]
  // Project Experience Fields
  project_title varchar
  roles text // Can hold multiple roles if needed
  responsibilities text // Description of responsibilities
  duration varchar
  technologies_used text // List of technologies used
  results text // Achievements or results of the project
  proficiency int // Proficiency level associated with the project

  // Certification Fields
  certification_name varchar
  issuing_organization varchar
  date_obtained date
  certification_url varchar

  // Assessment Fields
  assessment_name varchar
  date_taken date
  score_grade varchar
  comments text // Comments or feedback on the assessment
}



Table training_evidence as TE {
  id int [pk, increment] // Primary key and auto-increment
  auditId int [ref: > SAL.id] // Foreign key reference to the AuditLogs table for auditing
  evidenceId int [ref: > ET.id] // Foreign key reference to the evidence_type table for categorization
  trainingId int [ref: > T.trainingId] // Foreign key reference to specific evidence (e.g., training ID)
  certification_url text  // Foreign key reference to the Certification table
  comments text
  org_id int [ref:>O.id]
}




