class Api::V1::CardsController < ApplicationController
    def index
        @cards = Card.all

        render json: @cards, status: 200
    end

    def show
        @card = Card.find(params[:id])

        render json: @card, status: 200 
    end

    def create
        @user = User.create(user_params)

        render json: @card, status: 200 
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

        def card_params
            params.require(:card).permit(:state)
        end
        
end
