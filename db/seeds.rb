# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#TM instances 
Mentor.create!({
    "name":"Justus Onyacha",
    "password":"justus",
    "phone":0777655675,
    "email":"justus@gmail.com",
    "profile_image":"https://hips.hearstapps.com/hmg-prod/images/directly-above-shot-of-cappuccino-served-on-table-royalty-free-image-769817517-1564602749.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"

})

#Student instances 
s1 = Student.create!(username: "Denis Kariuki", email: "deniskariuki@moringaschool.com", password: "maizeandbeans", mentor_id: 1, profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKX-50cP1ZPxOB_pW3dJe3tAQXjHC-CpOgUsexPAE&s", gender: "Male")
s2 = Student.create!(username: "Eliazar Magero", email: "eliazar@moringaschool.com", password: "magero", mentor_id: 1, profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKX-50cP1ZPxOB_pW3dJe3tAQXjHC-CpOgUsexPAE&s", gender: "Male")
s3  = Student.create!(username: "Tabitha Wanja", email: "tabithawanja@moringaschool.com", password: "goodlife", mentor_id: 1, profile_image: "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg", gender: "Female")
s4 = Student.create!(username: "Ivy Murugi", email: "ivymurugi@moringaschool.com", password: "kevo", mentor_id: 1, profile_image: "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg", gender: "Female") 
s5 = Student.create!(username: "Vera Onuko", email: "veraonuko@moringaschool.com", password: "sidika", mentor_id: 1, profile_image: "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg", gender: "Female") 
s6 = Student.create!(username: "Sally Mulupi", email: "sallymulupi@moringaschool.com", password: "sallythegreat", mentor_id: 1, profile_image: "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg", gender: "Female")
s7 = Student.create!(username: "Linda Mukami", email: "lindamukami@moringaschool.com", password: "langata", mentor_id: 1, profile_image: "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg", gender: "Female")
s8 = Student.create!(username: "Sammy Kipyegon", email: "sammykipyegon@moringaschool.com", password: "bigfish", mentor_id: 1, profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKX-50cP1ZPxOB_pW3dJe3tAQXjHC-CpOgUsexPAE&s", gender: "Male") 
s9 = Student.create!(username: "Francis Ndambuki", email: "francisndambuki@moringaschool.com", password: "franco", mentor_id: 1, profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKX-50cP1ZPxOB_pW3dJe3tAQXjHC-CpOgUsexPAE&s", gender: "Male") 
s10 = Student.create!(username: "Ted Senior", email: "tedsenior@moringaschool.com", password: "senyorita", mentor_id: 1, profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKX-50cP1ZPxOB_pW3dJe3tAQXjHC-CpOgUsexPAE&s", gender: "Male")