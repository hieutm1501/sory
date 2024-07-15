import instance from "./config"

export const getAllPitch = () => {
    return instance.get(`/pitch`);
}