pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/RifqiTaufan/node-js-getting-started'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-jenkins-app .'
            }
        }

        stage('Run App') {
            steps {
                sh 'docker run -d -p 5000:5000 nodejs-jenkins-app'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
    }
}