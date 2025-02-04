#!/bin/sh

# variables 
DIR=~/project_files
path_text_file=~/project_files/welcome.txt
group_name=developers
user_name=intern_user


#delete old directory, users and groups
sudo rm -rf project_files
sudo userdel intern_user
sudo groupdel developers

# Task 1: Directory Management
# creating directory :'project_files'
echo "creating directory named: 'project_files'"


	mkdir project_files


# Task 2: User and Group Management
 # creating group : developers
echo "creating group named 'developers'"


	sudo groupadd $group_name

# creating user : intern_user
echo "creating user named 'intern_user'"


	sudo useradd $user_name

# Add "intern_user" to the "developers" group
echo "Add 'intern_user' to the 'developers' group"
	
	
	sudo usermod -aG $group_name $user_name

# move biplav to group : developers
	sudo usermod -aG $group_name biplav

# set password for the user 'intern_user'
echo "Set password for the user 'intern_user'"


	sudo passwd $user_name


# Task 4: Additional Tasks
echo "Create text file named: 'welcome.txt'"


	cd $DIR
	touch welcome.txt



# Task 3: Permissions and Ownership
echo "Changeing the ownership of the 'project_files' directory to group 'developers' and user 'intern_user'"


	sudo chown $user_name:$group_name $DIR


echo "Changing Permissions: "

echo "Owner can read, write and execute"
echo "Group can read and execute"
echo "Others should have no permission"


	chmod 750 project_files


echo "writing date and time of creation inside the 'welcome.txt'"


	echo "Creation Date & Time: $(stat -c %y welcome.txt)" > $path_text_file


echo "Writing Directory path in 'welcome.txt'"
	
	
	echo "Directory path: $(pwd)" >> $path_text_file


echo "Writing owner and group information in 'welcome.txt'"


	echo "Owner and group information: $(ls -ld $path_text_file | awk '{print($3, $4)}')" >> ~/project_files/welcome.txt


echo "Setting up suitable permissions for the file 'welcome.txt'"
		
	chmod 750 welcome.txt


# Task 5: Verification
# a. Directory Verification
echo "Verifying existence of the 'project_files' directory"


	if [ -d "$DIR" ]; then
    		echo "Directory named: 'project_files' found"
	else
	    echo "creating directory 'project_files'"
	    mkdir project_files
	fi
	
	
# b. Group creation verification


	if getent group "$group_name" >/dev/null; then
    		echo "Group $group_name exists"
	else
    		echo "Creating group name 'developers'"
    		sudo groupadd $group_name
	fi


# c. User creation verification


	if getent passwd "$user_name" >/dev/null; then
		echo "User $user_name exists"
	else
		echo "Creating user: $user_name"
	    	sudo useradd $user_name
	fi


# d. File creation and content verification
	if test -f $path_text_file; then
    		echo "File exists."
		echo "Displaying contents of the welcome.txt file"
    		head -n 5 welcome.txt    
	else
    		echo "Creating file welcome.txt"
    		cd project_files		
	    	touch welcome.txt 
	fi




