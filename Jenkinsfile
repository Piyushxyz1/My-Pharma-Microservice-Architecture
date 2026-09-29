

pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'pshuser/med:latest'
        EKS_CLUSTER_NAME = 'piyu-cluster'
        AWS_REGION = 'us-east-1'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

      stage('Checkout from Git') {
             steps {
              git branch: 'main',
              credentialsId: 'github-creds',
              url: 'https://github.com/Piyushxyz1/Medical-store.git'

             sh 'ls -la'  // Verify files after checkout
    }
}
      
      stage('Docker Build & Push') {
        steps {
          script {
              withDockerRegistry(credentialsId: 'docker-creds') {
                sh ''' 
                echo "Building Docker image..."
                docker build --no-cache -t $DOCKER_IMAGE .

                echo "Pushing Docker image to Docker Hub..."
                docker push $DOCKER_IMAGE
                '''
            }
        }
      } 
   }

        stage('Deploy to EKS Cluster') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-creds', 
                                                     usernameVariable: 'DOCKER_USER', 
                                                     passwordVariable: 'DOCKER_PASS')]) {
                        sh '''
                        echo "Configuring AWS..."
                        aws eks update-kubeconfig --name $EKS_CLUSTER_NAME --region $AWS_REGION

                        echo "Creating/updating backend env secret..."
                        kubectl create secret generic backend-secret \
                          --from-env-file=/var/lib/jenkins/env/.env \
                          --dry-run=client -o yaml | kubectl apply -f -

                        echo "Creating/updating Docker registry secret..."
                        kubectl create secret docker-registry regcred \
                          --docker-server=https://index.docker.io/v1/ \
                          --docker-username=$DOCKER_USER \
                          --docker-password=$DOCKER_PASS \
                          --docker-email=piyushnegi@tisindia.com \
                          --dry-run=client -o yaml | kubectl apply -f -

                        echo "Deploying backend..."
                        kubectl apply -f deployment.yml
                        kubectl apply -f service.yml

                        echo "Waiting for deployment rollout..."
                        kubectl rollout status deployment/medical-store-app

                        echo "Verifying pods and services..."
                        kubectl get pods
                        kubectl get svc
                        '''
                    }
                }
            }
        }
    }
}

    

