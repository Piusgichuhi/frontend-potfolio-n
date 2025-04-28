"use client"


import React from 'react';
import styled from 'styled-components';
import awsbackup from '@/assets/images/awsbackup.png';
import awss3 from '@/assets/images/awss3.png';
import buket from '@/assets/images/buket.png'


// Styled Components for the Layout

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #2c3e50;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  color: #7f8c8d;
  margin-top: 10px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 32px;
  color: #2980b9;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #2c3e50;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 18px;
  color: #2c3e50;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
`;

const MiniProjectSection = styled.div`
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
`;

const Conclusion = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
`;

// Component for the page

const AwsS3Project = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <Title>AWS S3</Title>
        <Subtitle>A comprehensive guide to AWS S3 and <span>Building a Backup and Restore System</span> </Subtitle>
      </Header>

      {/* Explanation of AWS S3 Buckets */}
      <Section>
        <SectionTitle>What is AWS S3?</SectionTitle>
        <Paragraph>
          Amazon S3 (Simple Storage Service) is a scalable, high-speed, web-based cloud storage service that
          provides data storage, management, and retrieval. S3 allows users to store and retrieve any amount of
          data from anywhere on the web.
        </Paragraph>
        <Image 
        style={{width:'50%', height:'auto'}}
        src={buket.src}
         alt="AWS S3 Bucket Overview" />
      </Section>

      {/* Key Points for AWS S3 */}
      <Section>
        <SectionTitle>Key Points of AWS S3</SectionTitle>
        <List>
          <ListItem><strong>Bucket Creation</strong>: Creating a container for storing data in S3.</ListItem>
          <ListItem><strong>Data Storage</strong>: AWS S3 provides a reliable and secure platform for storing files and data.</ListItem>
          <ListItem><strong>Data Consistency</strong>: S3 guarantees strong consistency for all operations (read-after-write consistency).</ListItem>
          <ListItem><strong>Data Durability and Availability</strong>: S3 offers 99.999999999% durability and high availability for your data.</ListItem>
          <ListItem><strong>Data Security</strong>: Supports encryption at rest and in transit with access control mechanisms.</ListItem>
          <ListItem><strong>Storage Classes</strong>: Different classes like Standard, Intelligent-Tiering, Glacier for cost-effective storage.</ListItem>
        </List>
        <Image 
        src={awss3.src}
         alt="AWS S3 Key Features" />
      </Section>

      {/* Mini Project: Building a Backup and Restore System */}
      <MiniProjectSection>
        <SectionTitle>Mini Project: Building a Backup and Restore System</SectionTitle>
        <Paragraph>
          In this mini-project, we will create a system that allows users to backup and restore their data to
          AWS S3, ensuring data is safely stored and can be recovered easily.
        </Paragraph>

        <SectionTitle>Project Objective</SectionTitle>
        <Paragraph>
          The objective is to build a secure and efficient backup and restore system using AWS S3, which helps
          organizations keep their important data backed up and easily accessible for restoration.
        </Paragraph>

        <SectionTitle>Steps Involved</SectionTitle>
        <List>
        <div>
            <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#1a1a1a' }}>
                EC2 Instance Setup
       </h1>
            </div>

          <ListItem> Launch an EC2 instance that you want to backup</ListItem>
          <ListItem>Ensure that the instance has the necessary
           permissions to interact with S3, either through IAM roles or access keys.</ListItem>
           <div>
            <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#1a1a1a' }}>
              Amazon S3 Bucket Creation
            </h1>
           </div>
           <ListItem>Create an S3 bucket to store the backup data. Choose a unique and meaningful name.</ListItem>

           <div>
            <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#1a1a1a' }}>
              Backup Script
            </h1>
           </div>
           <ListItem>Write a script or use AWS CLI commands to automate the backup process. </ListItem>
           <ListItem> The script should compress and securely upload data from the EC2 instance to the S3 bucket.</ListItem>

           <div>
            <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#1a1a1a' }}>
              Backup Scheduling || Optional 
            </h1>
           </div>
           <ListItem>
           If needed, schedule the backup script to run periodically to ensure regular backups.
           </ListItem>

           <div>
            <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#1a1a1a' }}>
              Restore Scripts
            </h1>
           </div>
           <ListItem>Develop a restore script or use AWS CLI commands to retrieve and restore 
            data from the S3 bucket to the EC2 instance. </ListItem>

            <div>
              <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#1a1a1a' }}>
                Testing 
              </h1>
            </div>
            <ListItem>Perform backup and restore operations to verify the system’s functionality.</ListItem>
        </List>
        <Image 
        src={awsbackup.src}
        alt="Backup and Restore Process Flow"
         />
      </MiniProjectSection>

      {/* Conclusion */}
      <Conclusion>
        <Paragraph style={{
          color:'#1a1a1a'
        }}>
          Building a backup and restore system on AWS S3 is a practical way to understand the power and flexibility of
          cloud storage. With high durability, scalability, and security features, AWS S3 is an excellent solution for
          businesses and individuals needing reliable cloud storage.

          By mastering Amazon S3, I will be well-equipped to architect and implement efficient data storage and 
          retrieval solutions, ensuring the durability and availability of your data in AWS.
        </Paragraph>
      </Conclusion>
    </Container>
  );
};

export default AwsS3Project;
