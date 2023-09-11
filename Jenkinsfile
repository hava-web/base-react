import java.time.ZonedDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter

pipeline {
    agent any
    
    environment {
        IMAGE_COMPLETE_NAME = ''
        ECR_CREDENTIAL_ID = 'aws-ecr'
        BUILD_TAG = ''
    }

    stages {
        stage('Preparation') {
            steps {
                script {
                    def shortCommitHash = env.GIT_COMMIT.substring(0, 8)
                    def currentDate = ZonedDateTime.now(ZoneId.of('Asia/Ho_Chi_Minh'))
                        .format(DateTimeFormatter.ofPattern('yyyyMMdd'))
                    BUILD_TAG = "${currentDate}-${shortCommitHash}"
                    IMAGE_COMPLETE_NAME = "${PCR}/${FUN_FE_BOOTH_NAME}:${BUILD_TAG}"
                }
            }
        }

        stage("Attach config file") {
            steps{
                script {
                    configFileProvider([configFile(fileId: 'ui-booth-config', targetLocation: './.env')]){}
                }
            }
        }
        
        stage('Docker build - push - cleanup') {
            steps {
                script {
                    checkout scm
                    
                    docker.withRegistry("https://" + PCR, "ecr:ap-southeast-1:" + ECR_CREDENTIAL_ID){
                        def dockerImage = docker.build(IMAGE_COMPLETE_NAME)
                        dockerImage.push()
                    }

                    sh "docker rmi ${IMAGE_COMPLETE_NAME}"
                }
            }
        }
        
        stage('Trigger git-ops process') {
              steps{
                  build job: 'FunStudio-Gitops', parameters: [
                     string(name: 'IMAGE_TAG', value: BUILD_TAG),
                     string(name: 'REPOSITORY_NAME', value: env.FUN_FE_BOOTH_NAME),
                     string(name: 'DEPL_FILE_PATH', value: './ui/booth/depl.yaml')
                  ]
              }
        }
    }
}
