/* Jenkinsfile for sample-ionic4 */
pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            args '-u root'
        }
    }
    /* BuildStep */
    stages {
        stage('Prepare') {
            steps {
                sh 'whoami'
                sh 'rm -rf ./platforms'
                sh 'cat /etc/os-release'
                sh 'pwd'
                sh 'ls -la'
            }
        }
        stage('Build') {
            steps {
                // Install node modules
                sh 'npm --version'
                sh 'npm install -g ionic@4.12.0'
                sh 'npm install -g cordova@9.0.0'
                sh 'npm install'
                sh 'npm --version'
                // Update Android SDK Build-Tools
                sh "yes | /opt/android/tools/bin/sdkmanager 'build-tools;28.0.3' || true"
                // Building android
                sh 'ionic cordova build android --debug'
            }
        }
        stage('Deploy') {
            steps {
                echo 'TODO: Sorry! Nothing Now.'
            }
        }
    }
    /* Clean up */
    post {
        always {
            echo 'One way or another, I have finished'
            //deleteDir() /* clean up our workspace */
        }
        success {
            echo 'Build success!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
