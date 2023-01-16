# Microservice with React, Next, Node js and MongoDB

### Clone this project 
## Installation
1. Visit [skaffold](https://skaffold.dev/) and install
```sh
skaffold dev
```
2. Install  Ingress Nginx, here is [getting started](https://github.com/kubernetes/ingress-nginx)
```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.1/deploy/static/provider/cloud/deploy.yaml
```
3. Jwt and Stripe Secret from [DashBoard Stripe](https://dashboard.stripe.com/test/apikeys)
```sh
kubectl create secret generic jwt-secret --from-literal JWT_KEY=asdf
kubectl create secret generic stripe-secret --from-literal STRIPE_KEY="seceret_from_stripe_api_keys"
kubectl get secrets
```
4. Add a Host Called to windows host file
 127.0.0.1 ticketing.road

5. For Build every image locally, go each project directory 
```sh
docker build -t mostofa62/imagename .
```

6. Stripe Test Key Roll Key and Secret both for work perfectly in frontend and backend
