class StudentsController < ApplicationController
  skip_before_action :authorize, only: :index
  #sign up new student
  def create 
    student = Student.create!(student_params)
    session[:user_id] = student.id
    render json: student, status: :created 
  end

  #List all students
  def show 
    render json: @current_student
  end
  def update
    student = Student.find(params[:id])
    student.update(student_params)
    render json: student
  end

  def index 
    render json: Student.all, status: :ok
  end

  private 
  def student_params
    params.permit(:username, :group_id, :email, :profile_image, :password, :password_confirmation,:mentor_id, :gender) 
  end

end
