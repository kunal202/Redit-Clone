import { MigrationInterface, QueryRunner } from "typeorm";

export class MockPost1607609283509 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    insert into "user" (email, username, password) values ('ram@gmail.com', 'ram','ram@123'); 
    insert into post (title, text, "creatorId", "createdAt") values ('White Water Summer', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-04-26T12:11:33Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Scared Shrekless', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-09-19T01:04:45Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Hangman''s House', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-06-12T19:54:53Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Threesome', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2020-06-01T00:03:52Z');
        insert into post (title, text, "creatorId", "createdAt") values ('One Chance', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2020-05-26T00:19:34Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Tuareg: The Desert Warrior (Tuareg - Il guerriero del deserto)', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
        
        Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
        
        Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-09-14T06:29:13Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Cinematographer Style', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        
        Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-06-26T09:06:57Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Charlie Chan in Paris', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-06-20T10:07:26Z');
        insert into post (title, text, "creatorId", "createdAt") values ('City of Joy', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
        
        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-07-28T22:32:31Z');
        insert into post (title, text, "creatorId", "createdAt") values ('House on the Edge of the Park, The (Casa sperduta nel parco, La)', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-01-10T18:27:06Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Ironclad', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-06-25T02:02:06Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Boys'' Night Out', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-07-17T05:00:16Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Beauty and the Bastard (Tyttö sinä olet tähti)', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-06-09T03:52:43Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Perkele! Kuvia Suomesta', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-01-19T07:57:04Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Henry Fool', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
        
        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-01-09T13:20:02Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Rogue', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
        
        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
        
        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-09-26T01:02:51Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Something Borrowed', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-02-25T14:13:25Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Creature from the Black Lagoon, The', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-01-18T14:39:13Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Shadow Magic', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-09-11T15:05:39Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Gunfighter, The', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-08-15T20:56:07Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Lupin the Third: The Secret of Mamo', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-08-01T05:35:26Z');
        insert into post (title, text, "creatorId", "createdAt") values ('A Mulher Invisível', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
        Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2020-05-17T12:26:09Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Alien Hunter', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-03-11T04:35:49Z');
        insert into post (title, text, "creatorId", "createdAt") values ('One Little Indian', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-10-17T15:22:40Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Barefoot Gen (Hadashi no Gen)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-07-25T21:22:33Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Village People', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-05-04T05:02:26Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Just Another Love Story (Kærlighed på film)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
        
        Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-02-03T16:28:54Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Left-Hand Side of the Fridge, The (Moitié gauche du frigo, La)', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-09-17T00:23:52Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Coelacanth: The Fish That Time Forgot', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
        
        Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2020-10-10T02:52:18Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Yanco ', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
        
        Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-12-07T07:23:31Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Revenge of the Nerds III: The Next Generation', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2020-01-29T11:02:55Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Sleepwalkers', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-11-16T03:50:55Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Two Drifters (Odete)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1, '2020-06-01T06:31:28Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Doctor Strange', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-01-22T15:14:22Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Escanaba in da Moonlight', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2020-04-02T08:46:15Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Rock School', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2020-09-16T01:22:47Z');
        insert into post (title, text, "creatorId", "createdAt") values ('The Squeeze', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
        
        Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-02-23T17:26:29Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Young and Prodigious T.S. Spivet, The (L''extravagant voyage du jeune et prodigieux T.S. Spivet)', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
        
        Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-09-03T10:29:01Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Woods, The', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
        
        Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
        
        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-10-12T20:39:52Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Flowers in the Attic', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
        
        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-10-26T14:21:55Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Tesseract, The', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-06-09T01:06:38Z');
        insert into post (title, text, "creatorId", "createdAt") values ('AmericanEast', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
        
        Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-08-19T01:40:17Z');
        insert into post (title, text, "creatorId", "createdAt") values ('How to Eat Your Watermelon in White Company (and Enjoy It)', 'In congue. Etiam justo. Etiam pretium iaculis justo.
        
        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
        
        Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-01-30T01:27:38Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Megiddo: The Omega Code 2', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
        
        Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2020-01-30T13:52:41Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Deathsport', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-08-24T21:18:51Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Safe', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2020-03-19T07:52:50Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Seven Years Bad Luck', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-03-28T19:07:16Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Murder à la Mod', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-05-29T22:09:10Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Room Service', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-11-01T18:11:23Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Cartoonist: Jeff Smith, BONE and the Changing Face of Comics, The', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-06-28T01:40:24Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Go for It', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2019-12-22T14:27:04Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Seal Team Eight: Behind Enemy Lines', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
        
        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2020-11-02T12:30:58Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Spider''s Stratagem, The (Strategia del ragno)', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-08-08T08:18:00Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Faces of Schlock', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-01-12T20:14:07Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Climax, The', 'Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2020-03-16T21:45:12Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Moment of Truth, The (Il momento della verità)', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2020-05-21T10:13:28Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Safety Patrol', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-11-26T13:28:20Z');
        insert into post (title, text, "creatorId", "createdAt") values ('So Fine', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-09-03T07:59:43Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Jamie and Jessie Are Not Together', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
        
        Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
        
        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-11-19T17:11:35Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Allegro non troppo', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-07-20T20:36:28Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Vice Versa', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-05-09T20:37:32Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Itty Bitty Titty Committee', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-01-13T13:47:43Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Misérables, Les', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        
        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2020-02-27T05:22:25Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Battle of the Bulge', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.
        
        Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2020-02-16T14:12:55Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Nayak: The Hero', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
        
        Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
        
        Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2020-10-05T06:58:14Z');
        `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
