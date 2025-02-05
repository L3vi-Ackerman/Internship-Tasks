#!/bin/bash
FILE_PATH="$HOME/Daily Tasks/heavy_jobs.log"
echo "Date & Time of executing: $(date)" >> "$FILE_PATH"
echo "$(ps -eo pid,ppid,%cpu,%mem --sort=-%cpu | head -n 6)" >> "$FILE_PATH"

