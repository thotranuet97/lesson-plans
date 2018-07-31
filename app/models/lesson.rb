class Lesson < ApplicationRecord
  include Filterable
  belongs_to :grade
  belongs_to :subject

  scope :grade, -> (grade) { where grade_id: grade }
  scope :subject, -> (subject) { where subject_id: subject }
end
