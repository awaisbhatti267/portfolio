# Beginner Level Chat System using OOP Concepts

# Class User
class User:
    def __init__(self, name):
        self.name = name

    def join_chat(self, chatroom):
        chatroom.add_user(self)

    def leave_chat(self, chatroom):
        chatroom.remove_user(self)

    def send_message(self, chatroom, text):
        chatroom.send_message(self, text)


# Class Message
class Message:
    def __init__(self, sender, text):
        self.sender = sender
        self.text = text

    def display(self):
        return f"{self.sender.name}: {self.text}"


# Class ChatRoom
class ChatRoom:
    def __init__(self, room_name):
        self.room_name = room_name
        self.users = []
        self.messages = []

    # User joins chat
    def add_user(self, user):
        self.users.append(user)
        print(user.name, "joined the chat room.")

    # User leaves chat
    def remove_user(self, user):
        self.users.remove(user)
        print(user.name, "left the chat room.")

    # Send message
    def send_message(self, user, text):
        msg = Message(user, text)
        self.messages.append(msg)
        print(msg.display())

    # View chat history
    def show_history(self):
        print("\nChat History:")
        for msg in self.messages:
            print(msg.display())


# Main Program
chat = ChatRoom("General Room")

# Create Users
user1 = User("Awais")
user2 = User("Ali")

# Users join
user1.join_chat(chat)
user2.join_chat(chat)

# Send messages
user1.send_message(chat, "Hello everyone!")
user2.send_message(chat, "Hi Awais!")

# Show history
chat.show_history()

# User leaves
user2.leave_chat(chat)