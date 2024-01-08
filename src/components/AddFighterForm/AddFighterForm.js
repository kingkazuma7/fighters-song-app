import React, { useState } from 'react'
import axios from 'axios';

const AddFighterForm = ({ onNewFighter }) => {
  const [formData, setFormData] = useState({
    name: '',
    weight_class: '',
    entrance_song: '',
    organization: [],
    youtube_link: '',
    image: '',
    image_source: '',
    birthday: '',
    height: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('../../json/fighters.json', formData);
      onNewFighter(response.data); // Update parent component's state
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>選手を追加する</form>
  )
}

export default AddFighterForm