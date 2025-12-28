
import api from "../config/api";


// ==========================
//      FETCH DATA FROM API
// ==========================


// --------- LOCATION ----------
export const fetchLocations = async() =>{
    const res = await api.get("/api/locations/");
    return res.data;
}


// --------- Download CV File----------
export const fetchCV = async() => {
    const res = await api.get("/api/cv/")
    return res.data;
}


// --------- Technologies----------
export const fetchTechnologies = async() =>{
    const res = await api.get("/api/technologies/")
    return res.data;
}


// --------- Skill Categories----------
export const fetchSkillCategories = async() =>{
    const res = await api.get("/api/skill-categories/")
    return res.data;
}


// --------- Skill----------
export const fetchSkills = async() =>{
    const res = await api.get("/api/skills/")
    return res.data;
}


// --------- Projects ----------
export const fetchProjects = async() =>{
    const res = await api.get("/api/projects/")
    return res.data;
}

