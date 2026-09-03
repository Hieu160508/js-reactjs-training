const rawUserFromAPI = {
  id: 1,
  name: "  An  ",
  profile: {
    bio: "Frontend dev",
    social: { github: "an-dev" },
  },
  // Lưu ý: field "email" có thể không tồn tại trong 1 số bản ghi
};

function getGuthubHandle(user) {
    return user?.profile?.social?.github ?? "No GitHub handle";
}

console.log(getGuthubHandle(rawUserFromAPI)); // an-dev

function updateBio(user, newBio) {
    return {
        ...user,
        profile: {
            ...user.profile,
            bio: newBio,
        },
    };
} 

console.log(updateBio(rawUserFromAPI, "Fullstack dev")); // { id: 1, name: '  An  ', profile: { bio: 'Fullstack dev', social: { github: 'an-dev' } } }

function toJSON(user) {
    return JSON.stringify(user);
}

console.log(toJSON(rawUserFromAPI)); // '{"id":1,"name":"  An  ","profile":{"bio":"Fullstack dev","social":{"github":"an-dev"}}}'

function fromJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Invalid JSON string:", error);
        return null;
    }
}

const jsonString = '{"id":1,"name":"  An  ","profile":{"bio":"Fullstack dev","social":{"github":"an-dev"}}}';
console.log(fromJSON(jsonString)); // { id: 1, name: '  An  ', profile: { bio: 'Fullstack dev', social: { github: 'an-dev' } } }    

console.log(rawUserFromAPI.profile.bio); 

console.log(getGuthubHandle({ id: 2, name: "Bình" })); // "No GitHub handle"

console.log(fromJSON("{ invalid json }")); // null