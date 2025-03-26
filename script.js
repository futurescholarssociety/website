// Executive Team Data
const executives = [
    {
        name: "Landen Nelson",
        title: "Chief Executive Scholar",
        bio: "Landen is the driving force behind Future Scholars Society, ensuring that every program aligns with our mission to create better educational opportunities."
    },
    {
        name: "Binh Haven",
        title: "Vice-Chief Executive Scholar",
        bio: "Binh oversees operations, making sure all initiatives run smoothly while fostering a collaborative and innovative learning environment."
    }
];

function showExecBio(index) {
    document.getElementById("exec-name").innerText = executives[index].name;
    document.getElementById("exec-title").innerText = executives[index].title;
    document.getElementById("exec-text").innerText = executives[index].bio;
    document.getElementById("exec-bio").style.opacity = "1";
}

function hideExecBio() {
    document.getElementById("exec-bio").style.opacity = "0";
}

// Council of Scholars Data
const scholars = [
    {
        name: "Savannah Myers",
        title: "Human Resources Director",
        bio: "Savannah is responsible for ensuring our team operates smoothly and efficiently."
    },
    {
        name: "Ella Colley",
        title: "Public Relations Director",
        bio: "Ella oversees media outreach and communication to spread our mission."
    },
    {
        name: "Landen Nelson",
        title: "Program Director",
        bio: "Landen creates and manages programs that bring alternative education to life."
    },
    {
        name: "Ava Adams",
        title: "Finance Director",
        bio: "Ava ensures our financial operations run smoothly and effectively."
    },
    {
        name: "Cohen McCormack",
        title: "Research & Policy Advocacy Director",
        bio: "Cohen leads research on education policies and works on advocacy efforts."
    }
];

function showScholarBio(index) {
    document.getElementById("scholar-name").innerText = scholars[index].name;
    document.getElementById("scholar-title").innerText = scholars[index].title;
    document.getElementById("scholar-text").innerText = scholars[index].bio;
    document.getElementById("scholar-bio").style.opacity = "1";
}

