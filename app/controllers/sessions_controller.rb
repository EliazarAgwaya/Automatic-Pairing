class SessionsController < ApplicationController
    def create
        mentor = Mentor.find_by(email:params[:email])

        if mentor&.authenticate(params[:password])
            session[:mentor_id] = mentor.id
            render json: mentor, status::created
        else
            render json:{error:"Incorrect username or password"}, status::unauthorized
        end
    end

        # Logout the mentor
        def destroy
            session.delete :mentor_id
            head :no_content
        end
end