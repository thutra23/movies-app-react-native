import React, { useState } from 'react';
import { Button, FormControl, HStack, Input, VStack, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const Form = props =>{
    const {onInputChange, fetchMovies} = props;
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const onSubmit = () => {
        fetchMovies();
    }




    return (
        <VStack space={2} width='100%' py={5}>
            <FormControl isRequired>
                <FormControl.Label fontSize='sm'>Search Movie/TV Show Name
                </FormControl.Label>
                <Input placeholder='i.e James Bond, CSI' variant='filled' bg='gray.200' px={3} width='85%'
                InputLeftElement={
                    <Icon size={5} ml={2} color='gray.400' as={<Ionicons name="ios-search"/> } />
                } onChangeText={value=>{
                    onInputChange(value)
                    setFormData({...formData, name: value})
                }}  />

                <FormControl.Label fontSize='sm'>Choose Search Type
                </FormControl.Label>
                <HStack width='100%' space={2}>
                    <Input placeholder='movie' variant='filled' bg='gray.200' px={3} width='85%'
                    InputLeftElement={
                        <Icon size={5} ml={2} color='gray.400' as={<Ionicons name="ios-search"/> } />
                    } 
                    /> 
                    <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search'/>}>Search</Button>
                </HStack>
            </FormControl>
        </VStack>
    )
}

export default Form;