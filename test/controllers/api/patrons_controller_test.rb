require 'test_helper'

class Api::PatronsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_patrons_index_url
    assert_response :success
  end

  test "should get update" do
    get api_patrons_update_url
    assert_response :success
  end

end
