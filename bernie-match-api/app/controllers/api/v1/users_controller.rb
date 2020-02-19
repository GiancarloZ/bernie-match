class Api::V1::UsersController < ApplicationController
    def new
        @user = User.new

        render json: @user, status: 200
    end

    def show
        # @card = Card.find(params[:id])

        # render json: @card, status: 200 
    end

    def create
        @user = User.create(user_params)
        # if @user.save
        #     session[:user_id] = @user.id
        #     @cart = Cart.find_or_create_by(user_id: session[:user_id])
        #     session[:cart_id] = @cart.id
        #     redirect_to root_path
        # else
        #     flash[:alert] = "Name must be filled out!"
        #     render :new
        # end
        render json: @user, status: 200 
    end

    def update
        # @card = Card.find(params[:id]
        # @card.update(card_params)

        # render json: @card, status: 200
    end

    def destroy
        # @card = Card.find(params[:id]
        # @card.delete
        
        # render json: {cardId: @card.id}
    end


    private

        def user_params
            params.require(:user).permit(:name)
        end

end
