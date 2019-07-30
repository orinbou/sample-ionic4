/* Jenkinsfile Sample */
pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            args '-e HOME=.'
        }
    }
    /* BuildStep */
    stages {
        stage('★ビルド準備') {
            steps {
                sh 'who'
                sh 'cat /etc/os-release'
                sh 'pwd'
                sh 'ls -la'
                sh 'cd'
                sh 'pwd'
                sh 'ls -la'
                sh 'ls -la /'
                sh 'ls -la /opt'
                sh 'ls -la /opt/node'
                sh 'ls -la /opt/node/lib'
            }
        }
        stage('★ビルド実行') {
            steps {
                // Install node modules
                sh 'npm --version'
                sh 'npm install -g ionic@4.12.0'
                sh 'npm install -g cordova@9.0.0'
                sh 'npm install'
                sh 'npm --version'
                // Update Android SDK Build-Tools
                sh 'yes | /opt/android/tools/bin/sdkmanager build-tools;28.0.3 || true'
                // Building android
                sh 'ionic cordova build android --debug'
            }
        }
        stage('★テスト実行') {
            steps {
                echo 'TODO: Sorry! Nothing Now.'
            }
        }
        stage('★デプロイ実行') {
            steps {
                echo 'TODO: Sorry! Nothing Now.'
            }
        }
    }
    /* Build終了後の処理 */
    post {
        always {
            echo 'One way or another, I have finished'
            //deleteDir() /* clean up our workspace */
        }
        success {
            echo '★ ビルド成功'
        }
        failure {
            echo '★ ビルド失敗'
        }
    }
}
