Table User {
  user_id int [pk]
  email varchar
  password varchar
  name varchar
  role varchar
}

Table Grievance {
  grievance_id int [pk]
  title varchar
  description text
  type varchar
  anonymity boolean
  status varchar
  submission_date datetime
  submitted_by int [ref: > User.user_id]
  is_anonymous boolean
}

Table GrievanceResponse {
  response_id int [pk]
  grievance_id int [ref: > Grievance.grievance_id]
  admin_id int [ref: > Admin.admin_id]
  response_text text
  response_date datetime
}

Table Admin {
  admin_id int [pk, ref: > User.user_id]
}

Table Student {
  student_id int [pk, ref: > User.user_id]
  student_number varchar
}

Table Faculty {
  faculty_id int [pk, ref: > User.user_id]
  department varchar
}

Table Non_Teaching_Faculty {
  non_teaching_faculty_id int [pk, ref: > User.user_id]
  designation varchar
}
