// export const backendURL = "http://localhost:8000";
export const backendURL = "https://api.smart-iam.com/api/coderooms";

export const runCodeUrl = "https://codex-api.herokuapp.com";

export const getLanguageToApiCode = (language) => {
    var a = {
        c: "c",
        cpp: "cpp",
        java: "java",
        python: "py",
    }

    return a[language] || "py";
}
