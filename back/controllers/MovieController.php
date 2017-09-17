<?php 

    require_once '../models/movieModel.php';
    require_once '../bl/movie-BLL.php';
    
    class MovieController {


        function getAll_Movies() {
            // try {
                    $movie_bll = new movie_BLL();
                    $resultSet = $movie_bll->get_movies();

                    $allMovies = array();
                    $errorInInput = ""; //use to check no problems in directors data retrieved from db -> if yes send error back to client

                    while ($row = $resultSet->fetch())
                    {                           
                        array_push($allMovies, new MovieModel([ "movie_id" => $row['movie_id'], 
                                                                "movie_name" => $row['movie_name'],
                                                                "director_id" => $row['director_id'],
                                                                "director_name" => $row['director_name']],
                                                                $errorInInput));
                    }
                    return $allMovies;
            // }
            // catch (Exception $error) {
            //     throw $error;
            // }
        }

        function create_update_Movie($params, $method, &$errorInInput) {
            try {
                    $Movie = new MovieModel($params, $errorInInput);
                    if ($errorInInput != "") { //error found in data members of movie object
                        return;
                    }
                    $movie_bll = new movie_BLL();
                    $movie_bll->insert_update_movie($params, $method, $errorInInput);
            }
            catch (Exception $error) {
                throw $error;
            }
        }

        function delete_Movie($params) {
            try {
                    $movie_bll = new movie_BLL();
                    $movie_bll->delete_movie($params);
            }
            catch (Exception $error) {
                throw $error;
            }
        }
        // function getCustomerById($id) {
        //     $array = [
        //         "id" => $id,
        //         "name" => MD5($id)
        //     ];
           
        //     $c = new CustomerModel($array);
        //     return $c->jsonSerialize();
        // }
    }

?>
