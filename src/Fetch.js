import { useState, useEffect } from "react";

const initProfile = {
  publicRepos: null,
  website: null,
}

const Fetch = () => {
  // initialize state to initProfile so it's not undefined
  const [ profile, setProfile ] = useState(initProfile);

  //function to get data from GitHub API
  const getProfile = async () => {
    const response= await fetch("https://api.github.com/users/pickadolly");
    const json = await response.json();

    // update state with response from Github API
    setProfile({
      publicRepos: json.public_repos,
      website: json.blog,
    });
  };

  // load GitHub profile data from API when component mounts
  useEffect(() => {
    getProfile();
    // only load one time when pg first mounts
  },[]);

  return (
    <div>
      <p>{`Public repositories: ${profile.publicRepos}`}</p>
      <p>{`Websites: ${profile.website}`}</p>
    </div>
  );
};

export default Fetch;