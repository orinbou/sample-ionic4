/* Jenkinsfile Sample */
pipeline {
    agent {
        docker {
            image 'beevelop/ionic:v4.12.0'
            args '-e HOME=.'
        }
    }
    /* BuildStep */
    stages {
        stage('ビルド準備') {
            steps {
                echo '########################################'
                echo '★ ビルド環境'
                echo '########################################'
                sh 'cat /etc/os-release'
                sh 'pwd'
                sh 'git clone -b jenkins/try01 https://github.com/orinbou/sample-ionic4' ./
            }
        }
        stage('ビルド実行') {
            steps {
                echo '########################################'
                echo '★ ビルド実行'
                echo '########################################'
                withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {
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
        }
        stage('テスト実行') {
            steps {
                echo '########################################'
                echo '★ テスト実行'
                echo '########################################'
                echo 'TODO: Sorry! Nothing Now.'
            }
        }
        stage('デプロイ実行') {
            steps {
                echo '########################################'
                echo '★ デプロイ実行'
                echo '########################################'
                echo 'TODO: Sorry! Nothing Now.'
            }
        }
    }
    /* Build終了後の処理 */
    post {
        always {
            echo '########################################'
            echo '★ 常に実行'
            echo '########################################'
            echo 'One way or another, I have finished'
            deleteDir() /* clean up our workspace */
        }
        success {
            echo '########################################'
            echo '★ ビルド成功'
            echo '########################################'
            script {
                // def msg = "[info][title]ビルド成功 ${env.JOB_NAME} - #${env.BUILD_NUMBER}[/title] app-url: $APP_URL result: ${env.BUILD_URL}[/info](cracker)"
                // notify(msg)
            }
        }
        failure {
            echo '########################################'
            echo '★ ビルド失敗'
            echo '########################################'
            script {
                // def msg = "[info][title]ビルド失敗 ${env.JOB_NAME} - #${env.BUILD_NUMBER}[/title] app-url: $APP_URL result: ${env.BUILD_URL}[/info](devil)"
                // notify(msg)
            }
        }
    }
}
