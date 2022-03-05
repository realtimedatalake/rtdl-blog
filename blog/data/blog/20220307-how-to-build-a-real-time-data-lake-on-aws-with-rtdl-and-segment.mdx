---
title: 'How to Build a Real-Time Data Lake on AWS with rtdl and Segment'
date: '2022-03-07'
tags: ['guide','aws','segment']
draft: true
summary: "Guide to bulding a real-time data lake on AWS with rtdl and Segment. Includes steps to deploy rtdl on AWS, creat an S3 bucket and configure security, and configuring both Segment and rtdl to build a real-time data lake from a source in Segment."
images: ['/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/og-image.png',]
authors: ['johnson-gavin',]
---
![banner](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/og-image.png)  
# How to build a Real-Time Data Lake on AWS with rtdl and Segment
AWS is the most popular cloud provider by a large margin. Segment is the easiest way to collect customer behavioral data – event data – from digital applications and connect those real-time event to destination applications. So one of the most common deployment scenarios and use cases for [rtdl](https://rtdl.io) is deploying on AWS and building a data lake on AWS with data from Segment. This guide will detail how to do that.

### Prerequisites
  * An AWS account
  * A Segment account and workspace with a source configured that will be used to build your data lake

## Deploy rtdl on AWS
### Create your EC2 instance
From the AWS Console:
  1.  In the search bar type "ec2" and select EC2.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/001.png)
  2.  Click on Instances in the left-navigation.
  3.  Click the Launch Instances button at the top of the page.
  4.  Click the AWS Marketplace tab, search for "ubuntu minimal", and select "Minimal Ubuntu 21.10 - Impish".  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/002.png)
  5.  Click the Continue button.
  6.  Choose your instance type, and click the Review and Launch button.
      * Pick an instance type with at least 8GiB memory. This tutorial will use a t3a.large.
  7.  Scroll down to the Storage section, and click Edit Storage.
  8.  Increase the storage size to 30GiB, and click the Review and Launch button.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/003.png)
  9.  Review your instance and click the Launch button.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/004.png)
  10. Select Create a New Key Pair from the top drop-down, select the key pair type, give your key pair a name, and download your key pair for later use.
  11. Click the Launch Instances button.
  12. After your EC2 instance is created, click on Instances in the left-navigation.
  13. Save the Public IPv4 Address of your new EC2 instance for later use.
  14. In the left-navigation under Network & Security, click Security Groups.
  15. Click on the Security Group Id for the one with a Security Group Name starting with "Minimal Ubuntu 21-10 - Impish...".  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/015.png)
  16. Under Inbound Rules, click the checkbox next to the inbound rule and click the Edit Inbound Rules button.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/016.png)
  17. Add Custom TCP rules with a source of "Anywhere-IPv4" for ports 80, 8080, 9092, 9047, 31010, and 45678.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/017.png)
  18. Click the Save Rules button.

### Set up your EC2 instance and deploy rtdl
From terminal on your local computer:
  1.  chmod the key you downloaded when you created with your EC2 instance.  
      `% sudo chmod 700 "[your key file]"`
  2.  SSH into your new EC2 instance.  
      `% ssh ubuntu@[EC2-Public-IP-Address] -i "[your key file]"`
  3.  Update everything.  
      ```
      $ sudo apt update
      Get:1 http://us-west-2.ec2.archive.ubuntu.com/ubuntu impish InRelease [270 kB]
      Get:2 http://us-west-2.ec2.archive.ubuntu.com/ubuntu impish-updates InRelease [110 kB]
      ...
      $ sudo apt upgrade
      Reading package lists... Done
      Building dependency tree... Done
      ...
      ```
  4.  Install useful and necessary tools.  
      `$ sudo apt install git vim curl wget`
  5.  Install Docker  
      ```
      $ sudo apt remove docker docker-engine docker.io containerd runc
      Reading package lists... Done
      Building dependency tree... Done
      ...
      $ sudo apt install ca-certificates gnupg lsb-release
      Reading package lists... Done
      Building dependency tree... Done
      ...
      $ sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
      $ sudo echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
      $ sudo apt update
      Hit:1 http://us-west-2.ec2.archive.ubuntu.com/ubuntu impish InRelease
      ...
      Get:4 https://download.docker.com/linux/ubuntu impish InRelease [48.9 kB]                                 
      Get:5 https://download.docker.com/linux/ubuntu impish/stable amd64 Packages [4136 B]
      ...
      $ sudo apt install docker-ce docker-ce-cli containerd.io docker-compose
      Reading package lists... Done
      Building dependency tree... Done
      ...
      $ sudo systemctl status docker
      ● docker.service - Docker Application Container Engine
          Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
          Active: active (running) since Fri 2022-03-04 05:40:29 UTC; 1min 24s ago
      ...
      $ sudo systemctl enable docker
      Synchronizing state of docker.service with SysV service script with /lib/systemd/systemd-sysv-install.
      Executing: /lib/systemd/systemd-sysv-install enable docker
      $ sudo systemctl restart docker
      $ sudo docker-compose --version
      docker-compose version 1.27.4, build unknown
      ```
  6.  Clone the [rtdl repository](https://github.com/realtimedatalake/rtdl).  
      `git clone https://github.com/realtimedatalake/rtdl.git`
  7.  cd into the rtdl directory.  
      `cd rtdl/`
  8.  Update `docker-compose.init.yml` to work with Linux.  
      `sudo vim docker-compose.init.yml`  
      Change:  
      ```
      ...
      dremio:
        platform: linux/amd64
        image: dremio/dremio-oss
        container_name: rtdl_dremio
        volumes:
      ...
      ```
      To:
      ```
      ...
      dremio:
        platform: linux/amd64
        image: dremio/dremio-oss
        container_name: rtdl_dremio
        user: root
        volumes:
      ...
      ```  
      And save.
  9.  Repeat for `docker-compose.yml`.
  10. Initialize rtdl.  
      `sudo docker-compose -f docker-compose.init.yml up -d`
  11. After the containers `rtdl_rtdl-db-init` and `rtdl_dremio-init` exit with status `EXITED (0)`, kill and delete the rtdl container set.  
      `sudo docker-compose -f docker-compose.init.yml down`  
      **Note:**  You can check the status of all running containers with `sudo docker ps -a`.
  12. Run rtdl.  
      `sudo docker-compose up -d`  
      * Run `sudo docker compose down` to stop.


## Create an S3 bucket and configure IAM access
From the AWS Console:
  1.  Create a new S3 bucket. Save your bucket name and region for use in configuring your stream in rtdl.
      * For more information, see [Amazon’s documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html).
  2.  Create a new IAM user.
      * For more information, see [Amazon’s documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console).
  3.  Create a IAM new policy.
      * Use the below permissions. Replace `<YOUR_BUCKET_NAME>` with the name of the S3 bucket you created in step 1.  
      ```
      {
          "Version": "2012-10-17",
          "Statement": [
              {
                  "Sid": "ListAllBuckets",
                  "Effect": "Allow",
                  "Action": [
                      "s3:GetBucketLocation",
                      "s3:ListAllMyBuckets"
                  ],
                  "Resource": [
                      "arn:aws:s3:::*"
                  ]
              },
              {
                  "Sid": "ListBucket",
                  "Effect": "Allow",
                  "Action": [
                      "s3:ListBucket"
                  ],
                  "Resource": [
                      "arn:aws:s3:::<YOUR_BUCKET_NAME>"
                  ]
              },
              {
                  "Sid": "ManageBucket",
                  "Effect": "Allow",
                  "Action": [
                      "s3:GetObject",
                      "s3:PutObject",
                      "s3:PutObjectAcl",
                      "s3:DeleteObject"
                  ],
                  "Resource": [
                      "arn:aws:s3:::<YOUR_BUCKET_NAME>/*"
                  ]
              }
          ]
      }
      ```  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/005.png)
  4.  Attach the policy created in step 3 to the IAM user created in step 2.
  5.  Create access keys for your IAM user.
      * For more information, see [Amazon's documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey).
      * Save the `Access Key ID` and `Secret Access Key` for use in configuring your stream in rtdl.


## Configure and activate a Webhooks destination in Segment
  1.  In Segment, under Connections -> Sources, select the source that you want to use to build your data lake.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/006.png)
  2.  Click the Add Destination button.
  3.  On the Catalog page in the search bar, enter "webhooks" and select the Webhooks destination.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/007.png)
  4.  Click the Configure Webhooks button.
  5.  Give your destination a name and click the Save button.
  6.  Under Connection Settings, click the "Webhooks" button.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/008.png)
  7.  Under Webhook URL, enter the ingest endpoint for rtdl and click the Save button.
      * Your ingest endpoint should be: `http://[EC2-Public-IP-Address]:8080/ingest`.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/009.png)
  10. Click the toggle to turn on delivery to your destination.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/012.png)
  11. Under Connections -> Sources, select the source for your data lake again.
  12. Click on Settings in the top-navigation and then API Keys in the left-navigation.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/013.png)
  13. Save the `Source ID` for use in configuring your stream in rtdl.  
      ![](/blog/static/images/blog/20220307-how-to-build-a-real-time-data-lake-on-aws-with-rtdl-and-segment/014.png)


## Configure your stream in rtdl
From terminal on your local computer:
  1.  Create a stream configuration record by sending a call to the API at http://[EC2-Public-IP-Address]:80/createStream.
      * Example `createStream` call body for creating a data lake on AWS S3.  
        ```
        {
        "stream_alt_id": "[segment-webhooks-source-id]",
        "active": true,
        "message_type": "rtdl-demo-aws",
        "file_store_type_id": 2,
        "region": "[bucket-region]",
        "bucket_name": "[bucket-name]",
        "folder_name": "rtdl-demo-aws",
        "partition_time_id": 1,
        "compression_type_id": 1,
        "aws_access_key_id": "[aws_access_key_id]",
        "aws_secret_access_key": "[aws_secret_access_key]"
        }
        ```
        * Example `createStream` curl call for creating a data lake on AWS S3.  
          ```
          curl --location --request POST 'http://[EC2-Public-IP-Address]:80/createStream' \
          --header 'Content-Type: application/json' \
          --data-raw '{
          "stream_alt_id": "[segment-webhooks-source-id]",
          "active": true,
          "message_type": "rtdl-demo-aws",
          "file_store_type_id": 2,
          "region": "[bucket-region]",
          "bucket_name": "[bucket-name]",
          "folder_name": "rtdl-demo-aws",
          "partition_time_id": 1,
          "compression_type_id": 1,
          "aws_access_key_id": "[aws_access_key_id]",
          "aws_secret_access_key": "[aws_secret_access_key]"
          }'
          ```

That's it. Now any data generated by your source in Segment will automatically be sent your real-time data lake on AWS S3.

## Try rtdl today
Do you want real-time data or a data lake but don’t have the expertise or time to build your own solution? Or are you just tired of the toil required to build and maintain a data lake? You should try rtdl. It’s the easiest way to build a real-time data lake. rtdl works with all of the most popular cloud providers. Best of all, [it’s open source on GitHub](https://github.com/realtimedatalake/rtdl).  
  
Go try rtdl today.
