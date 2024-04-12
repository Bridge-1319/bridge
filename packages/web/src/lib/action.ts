'use server'

export const fetchUserTraining = async () => {
    const response = await fetch('http://localhost:4000/trainings/mock');
    return response.json();
}