class Lesson < ApplicationRecord
  scope :grade, -> (grade) { where grade: grade }
  scope :subject, -> (subject) { where subject: subject }
end
