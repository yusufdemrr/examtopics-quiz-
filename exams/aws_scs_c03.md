# Exam Topics Questions

@thatonecodes

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 17 discussion

Exam question from

Amazon's
AWS Certified Security - Specialty SCS-C03

Question #: 17
Topic #: 1

[All AWS Certified Security - Specialty SCS-C03 Questions]

A company is using AWS to run a long-running analysis process on data that is stored in Amazon S3 buckets. The process runs on a fleet of Amazon EC2 instances that are in an Auto Scaling group. The EC2 instances are deployed in a private subnet of a VPC that does not have internet access. The EC2 instances and the S3 buckets are in the same AWS account.The EC2 instances access the S3 buckets through an S3 gateway endpoint that has the default access policy. Each EC2 instance is associated with an instance profile role that has a policy that explicitly allows the s3:GetObject action and the s3:PutObject action for only the required S3 buckets.The company learns that one or more of the EC2 instances are compromised and are exfiltrating data to an S3 bucket that is outside the company's organization in AWS Organizations. A security engineer must implement a solution to stop this exfiltration of data and to keep the EC2 processing job functional.Which solution will meet these requirements? 
Suggested Answer: B 🗳️ 

A. Update the policy on the S3 gateway endpoint to allow the S3 actions only if the values of the aws:ResourceOrgID and aws:PrincipalOrgID condition keys match the company's values.

B. Update the policy on the instance profile role to allow the S3 actions only if the value of the aws:ResourceOrgID condition key matches the company's value.

C. Add a network ACL rule to the subnet of the EC2 instances to block outgoing connections on port 443.

D. Apply an SCP on the AWS account to allow the S3 actions only if the values of the aws:ResourceOrgID and aws:PrincipalOrgID condition keys match the company's values.

**Answer: B**

**Timestamp: Feb. 2, 2026, 6:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382893-exam-aws-certified-security-specialty-scs-c03-topic-1/)

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 4 discussion

Exam question from

Amazon's
AWS Certified Security - Specialty SCS-C03

Question #: 4
Topic #: 1

[All AWS Certified Security - Specialty SCS-C03 Questions]

A company is using AWS Organizations with the default SCP. The company needs to restrict AWS usage for all AWS accounts that are in a specific OU.Except for some desired global services, the AWS usage must occur only in the eu-west-1 Region for all accounts in the OU. A security engineer must create an SCP that applies the restriction to existing accounts and any new accounts in the OU.Which SCP will meet these requirements? 
Suggested Answer: C 🗳️ 

A.

B.

C.

D.

**Answer: C**

**Timestamp: Feb. 2, 2026, 6:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382899-exam-aws-certified-security-specialty-scs-c03-topic-1/)

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 3 discussion

Exam question from

Amazon's
AWS Certified Security - Specialty SCS-C03

Question #: 3
Topic #: 1

[All AWS Certified Security - Specialty SCS-C03 Questions]

An AWS account administrator created an IAM group and applied the following managed policy to require that each individual user authenticate using multi-factor authentication:After implementing the policy, the administrator receives reports that users are unable to perform Amazon EC2 commands using the AWS CLI.What should the administrator do to resolve this problem while still enforcing multi-factor authentication? 
Suggested Answer: B 🗳️ 

A. Change the value of aws:MultiFactorAuthPresent to true.

B. Instruct users to run the aws sts get-session-token CLI command and pass the multi-factor authentication --serial-number and -token-code parameters. Use these resulting values to make API/CLI calls.

C. Implement federated API/CLI access using SAML 2.0, then configure the identity provider to enforce multi-factor authentication.

D. Create a role and enforce multi-factor authentication in the role trust policy. Instruct users to run the sts assume-role CLI command and pass --serial-number and --token-code parameters. Store the resulting values in environment variables. Add sts:AssumeRole to NotAction in the policy.

**Answer: B**

**Timestamp: Feb. 2, 2026, 6:34 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382901-exam-aws-certified-security-specialty-scs-c03-topic-1/)

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 1 discussion

Exam question from

Amazon's
AWS Certified Security - Specialty SCS-C03

Question #: 1
Topic #: 1

[All AWS Certified Security - Specialty SCS-C03 Questions]

A security engineer is troubleshooting an AWS Lambda function that is named MyLambdaFunction. The function is encountering an error when the function attempts to read the objects in an Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET. The S3 bucket has the following bucket policy:Which change should the security engineer make to the policy to ensure that the Lambda function can read the bucket objects? 
Suggested Answer: C 🗳️ 

A. Remove the Condition element. Change the Principal element to the following:

B. Change the Action element to the following:

C. Change the Resource element to "arn:aws:s3:::DOC-EXAMPLE- BUCKET/*''.

D. Change the Resource element to "arn:aws:lambda:::function:MyLambdaFunction". Change the Principal element to the following:

**Answer: C**

**Timestamp: Feb. 2, 2026, 6:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382889-exam-aws-certified-security-specialty-scs-c03-topic-1/)

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 45 discussion

Exam question from

Amazon's
AWS Certified Security - Specialty SCS-C03

Question #: 45
Topic #: 1

[All AWS Certified Security - Specialty SCS-C03 Questions]

A company is running a new workload across accounts that are in an organization in AWS Organizations. All running resources must have a tag of CostCenter, and the tag must have one of three approved values. The company must enforce this policy and must prevent any changes of the CostCenter tag to a non-approved value.Which solution will meet these requirements? 
Suggested Answer: A 🗳️ 

A. Create an AWS Config Custom Policy rule by using AWS CloudFormatlon Guard. Include the tag key of CostCenter and the approved values. Create an SCP that denies the creation of resources when the value of the aws:RequestTagCostCenter condition key is not one of the three approved values.

B. Create an AWS CloudTrail trail. Create an Amazon EventBridge rule that includes a rule statement that matches the creation of new resources. Configure the EventBridge rule to invoke an AWS Lambda function that checks for the CostCenter tag. Program the Lambda function to block creation in case of a noncompliant value.

C. Enable tag policies for the organization. Create a tag policy that specifies a tag key of CostCenter and the approved values. Configure the policy to enforce noncompliant operations. Create an SCP that denies the creation of resources when the aws:RequestTag.CostCenter condition key has a null value.

D. Enable tag policies for the organization. Create a tag policy that specifies a tag key of CostCenter and the approved values. Create an Amazon EventBridge rule that invokes an AWS Lambda function when a noncompliant tag is created. Program the Lambda function to block changes to the tag.

**Answer: A**

**Timestamp: Feb. 2, 2026, 6:37 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382935-exam-aws-certified-security-specialty-scs-c03-topic-1/)

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 40 discussion

Exam question from

Amazon's
AWS Certified Security - Specialty SCS-C03

Question #: 40
Topic #: 1

[All AWS Certified Security - Specialty SCS-C03 Questions]

A healthcare company stares mare than 1 million patient records in an Amazon S3 bucket. The patient records include personally identifiable information (Pit). The S3 bucket contains hundreds of terabytes of data.A security engineer receives an alert that was triggered by an Amazon GuardDuty Exfiltration:S3/AnomalousBehavior finding. The security engineer confirms that an attacker is using temporary credentials that were obtained from a compromised Amazon EC2 instance that has s3:GetObject permissions for the S3 bucket. The attacker has begun downloading the contents of the bucket. The security engineer contacts a development team. The development team will require 4 hours to implement and deploy a fix.The security engineer must take immediate action to prevent the attacker from downloading more data from the S3 bucket.Which solution will moot this requirement? 
Suggested Answer: A 🗳️ 

A. Revoke the temporary session that is associated with the instance profile that is attached to the EC2 instance.

B. Quarantine the EC2 instance by replacing the existing security group with a new security group that has no rules applied.

C. Enable Amazon Made on the S3 bucket. Configure the managed data identifiers for personally identifiable information (PII). Enable S3 Object Lock on objects that Macie flags.

D. Apply an S3 bucket policy temporarily. Configure the policy to deny read access for all principals to block downloads while the development team address the vulnerability.

**Answer: A**

**Timestamp: Feb. 2, 2026, 6:38 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382947-exam-aws-certified-security-specialty-scs-c03-topic-1/)

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 10 discussion

Exam question from

Amazon's
AWS Certified Security - Specialty SCS-C03

Question #: 10
Topic #: 1

[All AWS Certified Security - Specialty SCS-C03 Questions]

A security engineer is responding to an incident that is affecting an AWS account. The ID of the account is 1234156789012. The attack created workloads that are distributed across multiple AWS Regions.The security engineer contains the attack. The security engineer removes all compute and storage resources from all affected Regions. However, the attacker also created an AWS KMS key. The key policy on the KMS key explicitly allows IAM principal kms:* permissions.The key was scheduled to be deleted the previous day. However, the key is still enabled and usable. The key has an ARN of arn:aws;kms:us-east-2:123456789012:key/mrk-0bb0212cd9864fdea0dcamzo26efb5670. The security engineer must delete the key as quickly as possible.Which solution will meet this requirement? 
Suggested Answer: B 🗳️ 

A. Log in to the account by using the account root user credentials. Re-issue the deletion request for the KMS key with a waiting period of 7 days.

B. Identify the other Regions where the KMS key ID is present and schedule the key for deletion in 7 days.

C. Update the IAM principal lo allow kms:* permissions on the KMS key ARN. Re-issue the deletion request for the KMS key with a waiting period of 7 days.

D. Disable the KMS key. Re-issue the deletion request for the KMS key in 30 days.

**Answer: B**

**Timestamp: Feb. 2, 2026, 6:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382890-exam-aws-certified-security-specialty-scs-c03-topic-1/)

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 6 discussion

Exam question from

Amazon's
AWS Certified Security - Specialty SCS-C03

Question #: 6
Topic #: 1

[All AWS Certified Security - Specialty SCS-C03 Questions]

What is the effect of the following AWS Key Management Service (AWS KMS} key policy that is attached to a customer managed key? 
Suggested Answer: C 🗳️ 

A. Amazon WorkMail and Amazon Simple Email Service (Amazon SES) have delegated KMS encrypt and decrypt permissions to the ExampleRole principal in the 111122223333 account.

B. The ExampleRole principal can transparently encrypt and decrypt email exchanges specifically between ExampleRole and AWS.

C. The customer managed key can be used for encrypting and decrypting only when the principal is ExampleRole and when the request comes from Amazon WorkMail or Amazon Simple Email Service (Amazon SES) in the specified AWS Region.

D. The key policy allows Amazon WorkMail or Amazon Simple Email Service (Amazon SES) to encrypt or decrypt on behalf of the ExampleRole for any customer managed key in the account.

**Answer: C**

**Timestamp: Feb. 2, 2026, 6:38 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382949-exam-aws-certified-security-specialty-scs-c03-topic-1/)

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 9 discussion

Exam question from

Amazon's
AWS Certified Security - Specialty SCS-C03

Question #: 9
Topic #: 1

[All AWS Certified Security - Specialty SCS-C03 Questions]

A company needs a solution to protect critical data from being permanently deleted. The data is stored in Amazon S3 buckets.The company needs to replicate the S3 objects from the company's primary AWS Region to a secondary Region to meet disaster recovery requirements. The company must also ensure that users who have administrator access cannot permanently delete the data in the secondary Region.Which solution will meet these requirements? 
Suggested Answer: A 🗳️ 

A. Configure AWS Backup to perform cross-Region S3 backups. Select a backup vault in the secondary Region. Enable AWS Backup Vault Lock in governance mode for the backups in the secondary Region.

B. Implement S3 Object Lock in compliance mode in the primary Region. Configure S3 replication to replicate the objects to an S3 bucket in the secondary Region.

C. Configure S3 replication to replicate the objects to an S3 bucket in the secondary Region. Create an S3 bucket policy to deny the s3:ReplicateDelete action on the S3 bucket in the secondary Region.

D. Configure S3 replication to replicate the objects to an S3 bucket in the secondary Region. Configure S3 object versioning on the S3 bucket in the secondary Region.

**Answer: A**

**Timestamp: Feb. 2, 2026, 6:33 a.m.**

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382895-exam-aws-certified-security-specialty-scs-c03-topic-1/)

----------------------------------------

