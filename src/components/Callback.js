import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userLogin } from '../reducers/tokenReducer';

const Callback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const code = new URLSearchParams(window.location.search).get('code');
      if (!code) return;

      try {
        const body = new URLSearchParams();
        body.append('grant_type', 'authorization_code');
        body.append('code', code);
        body.append('redirect_uri', 'http://localhost:3000/callback');
/*         body.append('client_id', 'YOUR_CLIENT_ID');
        body.append('client_secret', 'YOUR_CLIENT_SECRET');
 */
        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          body,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('5c2e53056c7e4287bf2c92c8edf7a6ee:fd21cc6f25ac4e8aa3d7c50db6ad2fcc')
            }
          }
        );

        const token = response.data.access_token;
        window.localStorage.setItem('token', token);
        dispatch(userLogin(token));
        navigate('/home');
      } catch (error) {
        console.error('Error getting access token:', error.response?.data || error.message);
      }
    };

    fetchToken();
  }, [dispatch, navigate]);

  return <div>Logging in...</div>;
};

export default Callback;