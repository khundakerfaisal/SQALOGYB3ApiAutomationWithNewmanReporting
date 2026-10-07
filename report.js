const newman = require('newman');
 
newman.run({

    collection: `SQALOGY_B3_EmployeeApi.postman_collection.json`,
    // environment:`SQALOGYB3TestEnv.postman_environment.json`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
