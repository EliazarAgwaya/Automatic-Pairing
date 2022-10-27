class SessionsController < ApplicationController
     # Log in an existing user
  skip_before_action :authorize, only: :create 

     def create
        mentor  = Mentor.find_by(email: params[:username])
        # if user exists and has correct password
        if mentor&.authenticate(params[:password])
            session[:mentor_id] = mentor.id
            render json: mentor
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    # Logout the user
    def destroy
        mentor = Mentor.find_by(id: session[:mentor_id])
        if mentor
            session.delete :user_id
            head :no_content
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end
end
