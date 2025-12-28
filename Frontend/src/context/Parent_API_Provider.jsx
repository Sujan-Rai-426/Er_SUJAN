import React, { useEffect, useState, useCallback } from "react";
import { Parent_API_Context } from "./Parent_API_Context";
import {
    fetchLocations,
    fetchCV,
    fetchProjects,
    fetchTechnologies,
    fetchSkillCategories,
    fetchSkills,
} from "./Parent_API_Fetch";

const CACHE_KEY = "parent_api_cache";
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours
// const CACHE_TTL = 6; // 6 ms

const Parent_API_Provider = ({ children }) => {
  const [data, setData] = useState({
      locations: [],
      cv: [],
      technologies: [],
      skillCategories: [],
      skills: [],
      projects: [],
      // contacts: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAllData = useCallback(async () => {
    try {
      setLoading(true);

      // 🔹 Try localStorage cache
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TTL) {
              setData(parsed.data);
              setLoading(false);
              return;
          }
      }

      // 🔹 Fetch from API
      const [ 
                locations, 
                cv, 
                technologies, 
                skillCategories,
                skills, 
                projects,
            ] = await Promise.all([ 
                                      fetchLocations(), 
                                      fetchCV(), 
                                      fetchTechnologies(),
                                      fetchSkillCategories(),
                                      fetchSkills(), 
                                      fetchProjects(),
                                      // fetchContacts(), 
                                ]);

      const newData = {
          locations,
          cv,
          technologies,
          skillCategories,
          skills,
          projects,
      };

      setData(newData);

      localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
              timestamp: Date.now(),
              data: newData,
          })
      );

    } catch (err) {
      console.error(err);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  return (
    <Parent_API_Context.Provider
      value={{ ...data, loading, error, reload: loadAllData }}
    >
      {children}
    </Parent_API_Context.Provider>
  );
};

export default Parent_API_Provider;
