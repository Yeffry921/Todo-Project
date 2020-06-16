const projectForm = () => {
    return `
        <form action="" id="project-form">
            <header>
                <h1>Add project</h1>
            </header>
            <section class="form-control">
                <label for="projectName">Enter your project name</label>
                <input type="text" name="projectName" class="project-form-input">
            </section>
            <section class="form-control">
                <button type="submit" class="addProjectBtn">Add Project</button>
            </section>
        </form>
        `;
};

export {projectForm};